package com.edemirkirkan.thybackend.geo.converter;

import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.geo.dto.RestGeoDataDto;
import com.edemirkirkan.thybackend.geo.entity.GeoData;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-04T10:42:35+0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2 (Oracle Corporation)"
)
@Component
public class GeoDataMapperImpl extends GeoDataMapper {

    @Override
    public GeoData convertToEntity(RestGeoDataDto restGeoDto) {
        if ( restGeoDto == null ) {
            return null;
        }

        GeoData geoData = new GeoData();

        geoData.setLatitude( restGeoDto.getLat() );
        geoData.setLongitude( restGeoDto.getLon() );
        geoData.setName( restGeoDto.getName() );
        geoData.setCountry( restGeoDto.getCountry() );

        return geoData;
    }

    @Override
    public GeoDataDto convertToDto(GeoData geoData) {
        if ( geoData == null ) {
            return null;
        }

        GeoDataDto geoDataDto = new GeoDataDto();

        geoDataDto.setName( geoData.getName() );
        geoDataDto.setCountry( geoData.getCountry() );
        geoDataDto.setLatitude( geoData.getLatitude() );
        geoDataDto.setLongitude( geoData.getLongitude() );

        return geoDataDto;
    }
}
