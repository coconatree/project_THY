package com.edemirkirkan.thybackend.geo.converter;

import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.geo.entity.GeoData;
import com.edemirkirkan.thybackend.rst.dto.RestGeoDataDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public abstract class GeoDataMapper {

    public abstract GeoData convertToEntity(RestGeoDataDto restGeoDataDto);

    // Need to add maping properties
    // @Mapping(target = "", source = "")
    public abstract GeoDataDto convertToDto(GeoData geoData);
}
