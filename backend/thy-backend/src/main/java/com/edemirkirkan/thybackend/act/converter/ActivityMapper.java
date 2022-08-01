package com.edemirkirkan.thybackend.act.converter;

import com.edemirkirkan.thybackend.act.dto.RestActivityDto;
import com.edemirkirkan.thybackend.act.entity.Activity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public abstract class ActivityMapper {
    @Mapping(target = "latitude", source = "geoCode.latitude")
    @Mapping(target = "longitude", source = "geoCode.longitude")
    @Mapping(target = "currencyCode", source = "price.currencyCode")
    @Mapping(target = "amount", source = "price.amount")
    public abstract Activity convertToEntity(RestActivityDto restActivityDto);

    public abstract List<Activity> convertToEntityList(List<RestActivityDto> restActivityDtos);
}
