package com.edemirkirkan.thybackend.act.service;

import com.edemirkirkan.thybackend.act.converter.ActivityMapper;
import com.edemirkirkan.thybackend.act.dao.ActivityDao;
import com.edemirkirkan.thybackend.act.dto.ActivityDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityListDto;
import com.edemirkirkan.thybackend.act.entity.Activity;
import com.edemirkirkan.thybackend.rst.service.RestService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ActivityService {
    private final RestService restService;
    private final ActivityMapper mapper;
    private final ActivityDao activityDao;

    public List<ActivityDto> retrieveAllActivities(String latitude, String longitude) {
        List<Activity> activities = activityDao.findAllByQueryLatAndQueryLon(latitude, longitude);
        if (activities == null || activities.size() == 0) {
            RestActivityListDto restActivityListDto = restService.activityRequest(latitude, longitude);
            List<RestActivityDto> restActivityDtos = restActivityListDto.getData()
                    .stream()
                    .filter(p -> p.getName() != null
                            && p.getRating() != null
                            && p.getPictures() != null
                            && p.getPictures().size() != 0
                            && p.getBookingLink() != null)
                    .collect(Collectors.toList());
            activities = mapper.convertToEntityList(restActivityDtos);
            for (Activity activity : activities) {
                activity.setQueryLat(latitude);
                activity.setQueryLon(longitude);
                activityDao.save(activity);
            }
        }
        return mapper.convertToDtoList(activities);
    }
}
