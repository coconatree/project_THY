package com.edemirkirkan.thybackend.geo.converter;

import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.geo.entity.GeoData;
import com.edemirkirkan.thybackend.geo.dto.RestGeoDataDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public abstract class GeoDataMapper {

    @Mapping(target = "latitude", source = "lat")
    @Mapping(target = "longitude", source = "lon")
    public abstract GeoData convertToEntity(RestGeoDataDto restGeoDto);

    public abstract GeoDataDto convertToDto(GeoData geoData);
}
