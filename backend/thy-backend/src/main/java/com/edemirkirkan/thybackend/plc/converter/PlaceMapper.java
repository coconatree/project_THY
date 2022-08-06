package com.edemirkirkan.thybackend.plc.converter;

import com.edemirkirkan.thybackend.act.dto.ActivityDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityDto;
import com.edemirkirkan.thybackend.act.entity.Activity;
import com.edemirkirkan.thybackend.plc.dto.PlaceDto;
import com.edemirkirkan.thybackend.plc.dto.RestPlaceDto;
import com.edemirkirkan.thybackend.plc.entity.Place;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public abstract class PlaceMapper {

    @Mapping(target = "latitude", source = "geoCode.latitude")
    @Mapping(target = "longitude", source = "geoCode.longitude")
    public abstract Place convertToEntity(RestPlaceDto restPlaceDto);

    public abstract List<Place> convertToEntityList(List<RestPlaceDto> restPlaceDtos);

    public abstract PlaceDto convertToDto(Place place);

    public abstract List<PlaceDto> convertToDtoList(List<Place> places);

    @AfterMapping
    protected void customMapping(Place place, @MappingTarget PlaceDto placeDto) {
        String latitude = place.getLatitude();
        String longitude = place.getLongitude();
        placeDto.setGoogleLocLink("https://maps.google.com/?q="+
                latitude + "," + longitude);
        placeDto.setAppleLocLink("http://maps.apple.com/?q="
                + latitude + "," + longitude);
    }

}
