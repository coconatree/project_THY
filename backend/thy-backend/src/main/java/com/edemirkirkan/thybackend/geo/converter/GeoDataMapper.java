package com.edemirkirkan.thybackend.geo.converter;

import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.geo.entity.GeoData;
import com.edemirkirkan.thybackend.geo.rst.RestGeoDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public abstract class GeoDataMapper {

    @Mapping(target = "latitude", source = "geoCode.latitude")
    @Mapping(target = "longitude", source = "geoCode.longitude")
    public abstract GeoData convertToEntity(RestGeoDto restGeoDto);

    // Need to add maping properties
    // @Mapping(target = "", source = "")
    public abstract GeoDataDto convertToDto(GeoData geoData);
}
