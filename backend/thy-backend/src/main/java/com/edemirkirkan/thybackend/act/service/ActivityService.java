package com.edemirkirkan.thybackend.act.service;

import com.edemirkirkan.thybackend.act.converter.ActivityMapper;
import com.edemirkirkan.thybackend.act.dao.ActivityDao;
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

    public List<Activity> retrieveAllActivities(String latitude, String longitude) {

        RestActivityListDto restActivityListDto = restService.activityRequest(latitude, longitude);
        List<RestActivityDto> restActivityDtos = restActivityListDto.getData()
                .stream()
                .filter(p -> p.getName() != null
                        && p.getPrice().getAmount() != null
                        && p.getRating() != null
                        && p.getPictures() != null
                        && p.getPictures().size() != 0
                        && p.getBookingLink() != null)
                .collect(Collectors.toList());
        List<Activity> activities = mapper.convertToEntityList(restActivityDtos);
        activities = activityDao.saveAll(activities);
        return activities;
    }
}
