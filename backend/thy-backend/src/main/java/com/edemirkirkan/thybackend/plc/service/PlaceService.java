package com.edemirkirkan.thybackend.plc.service;

import com.edemirkirkan.thybackend.plc.converter.PlaceMapper;
import com.edemirkirkan.thybackend.plc.dao.PlaceDao;
import com.edemirkirkan.thybackend.plc.dto.PlaceDto;
import com.edemirkirkan.thybackend.plc.dto.RestPlaceDto;
import com.edemirkirkan.thybackend.plc.dto.RestPlaceListDto;
import com.edemirkirkan.thybackend.plc.entity.Place;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceDao placeDao;
    private final RestPlaceService restPlaceService;
    private final PlaceMapper placeMapper;

    public List<PlaceDto> getPlaces(String lat, String lon) {
        List<Place> places = placeDao.findAllByQueryLatAndQueryLon(lat, lon);
        if (places == null || places.size() == 0) {
            RestPlaceListDto restPlaceListDto = restPlaceService.placeRequest(lat, lon);
            List<RestPlaceDto> restPlaceDtos = restPlaceListDto.getData();
            places = placeMapper.convertToEntityList(restPlaceDtos);
            for (Place place : places) {
                place.setQueryLat(lat);
                place.setQueryLon(lon);
                placeDao.save(place);
            }
        }
        return placeMapper.convertToDtoList(places);
    }

}
