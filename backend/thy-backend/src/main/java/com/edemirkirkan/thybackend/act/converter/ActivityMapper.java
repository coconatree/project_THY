package com.edemirkirkan.thybackend.act.converter;

import com.edemirkirkan.thybackend.act.dto.ActivityDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityDto;
import com.edemirkirkan.thybackend.act.entity.Activity;
import org.mapstruct.*;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public abstract class ActivityMapper {
    @Mapping(target = "latitude", source = "geoCode.latitude")
    @Mapping(target = "longitude", source = "geoCode.longitude")
    @Mapping(target = "currencyCode", source = "price.currencyCode")
    @Mapping(target = "amount", source = "price.amount")
    public abstract Activity convertToEntity(RestActivityDto restActivityDto);

    public abstract List<Activity> convertToEntityList(List<RestActivityDto> restActivityDtos);

    @AfterMapping
    protected void customMapping(Activity activity, @MappingTarget ActivityDto activityDto) {
        String latitude = activity.getLatitude();
        String longitude = activity.getLongitude();
        activityDto.setGoogleLocLink("https://maps.google.com/?q="+
                latitude + "," + longitude);
        activityDto.setAppleLocLink("http://maps.apple.com/?q="
                + latitude + "," + longitude);
    }

    public abstract ActivityDto convertToDto(Activity activity);

    public abstract List<ActivityDto> convertToDtoList(List<Activity> activities);

}
