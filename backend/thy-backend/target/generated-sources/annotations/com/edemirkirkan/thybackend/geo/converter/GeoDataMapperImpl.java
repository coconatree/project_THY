package com.edemirkirkan.thybackend.geo.converter;

import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.geo.entity.GeoData;
import com.edemirkirkan.thybackend.geo.rst.RestGeoCodeDto;
import com.edemirkirkan.thybackend.geo.rst.RestGeoDto;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-01T20:44:32+0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2 (Oracle Corporation)"
)
@Component
public class GeoDataMapperImpl extends GeoDataMapper {

    @Override
    public GeoData convertToEntity(RestGeoDto restGeoDto) {
        if ( restGeoDto == null ) {
            return null;
        }

        GeoData geoData = new GeoData();

        geoData.setLatitude( restGeoDtoGeoCodeLatitude( restGeoDto ) );
        geoData.setLongitude( restGeoDtoGeoCodeLongitude( restGeoDto ) );
        geoData.setType( restGeoDto.getType() );
        geoData.setName( restGeoDto.getName() );
        geoData.setIataCode( restGeoDto.getIataCode() );

        return geoData;
    }

    @Override
    public GeoDataDto convertToDto(GeoData geoData) {
        if ( geoData == null ) {
            return null;
        }

        GeoDataDto geoDataDto = new GeoDataDto();

        geoDataDto.setType( geoData.getType() );
        geoDataDto.setSubType( geoData.getSubType() );
        geoDataDto.setName( geoData.getName() );
        geoDataDto.setIataCode( geoData.getIataCode() );
        geoDataDto.setLatitude( geoData.getLatitude() );
        geoDataDto.setLongitude( geoData.getLongitude() );

        return geoDataDto;
    }

    private String restGeoDtoGeoCodeLatitude(RestGeoDto restGeoDto) {
        if ( restGeoDto == null ) {
            return null;
        }
        RestGeoCodeDto geoCode = restGeoDto.getGeoCode();
        if ( geoCode == null ) {
            return null;
        }
        String latitude = geoCode.getLatitude();
        if ( latitude == null ) {
            return null;
        }
        return latitude;
    }

    private String restGeoDtoGeoCodeLongitude(RestGeoDto restGeoDto) {
        if ( restGeoDto == null ) {
            return null;
        }
        RestGeoCodeDto geoCode = restGeoDto.getGeoCode();
        if ( geoCode == null ) {
            return null;
        }
        String longitude = geoCode.getLongitude();
        if ( longitude == null ) {
            return null;
        }
        return longitude;
    }
}
