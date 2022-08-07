package com.edemirkirkan.thybackend.plc.converter;

import com.edemirkirkan.thybackend.plc.dto.PlaceDto;
import com.edemirkirkan.thybackend.plc.dto.RestPlaceDto;
import com.edemirkirkan.thybackend.plc.dto.RestPlaceGeoCodeDto;
import com.edemirkirkan.thybackend.plc.entity.Place;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-07T11:20:35+0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2 (Oracle Corporation)"
)
@Component
public class PlaceMapperImpl extends PlaceMapper {

    @Override
    public Place convertToEntity(RestPlaceDto restPlaceDto) {
        if ( restPlaceDto == null ) {
            return null;
        }

        Place place = new Place();

        place.setLatitude( restPlaceDtoGeoCodeLatitude( restPlaceDto ) );
        place.setLongitude( restPlaceDtoGeoCodeLongitude( restPlaceDto ) );
        place.setId( restPlaceDto.getId() );
        place.setName( restPlaceDto.getName() );
        place.setCategory( restPlaceDto.getCategory() );
        place.setRank( restPlaceDto.getRank() );
        List<String> list = restPlaceDto.getTags();
        if ( list != null ) {
            place.setTags( new ArrayList<String>( list ) );
        }

        return place;
    }

    @Override
    public List<Place> convertToEntityList(List<RestPlaceDto> restPlaceDtos) {
        if ( restPlaceDtos == null ) {
            return null;
        }

        List<Place> list = new ArrayList<Place>( restPlaceDtos.size() );
        for ( RestPlaceDto restPlaceDto : restPlaceDtos ) {
            list.add( convertToEntity( restPlaceDto ) );
        }

        return list;
    }

    @Override
    public PlaceDto convertToDto(Place place) {
        if ( place == null ) {
            return null;
        }

        PlaceDto placeDto = new PlaceDto();

        placeDto.setId( place.getId() );
        placeDto.setName( place.getName() );
        placeDto.setCategory( place.getCategory() );
        placeDto.setRank( place.getRank() );
        List<String> list = place.getTags();
        if ( list != null ) {
            placeDto.setTags( new ArrayList<String>( list ) );
        }

        customMapping( place, placeDto );

        return placeDto;
    }

    @Override
    public List<PlaceDto> convertToDtoList(List<Place> places) {
        if ( places == null ) {
            return null;
        }

        List<PlaceDto> list = new ArrayList<PlaceDto>( places.size() );
        for ( Place place : places ) {
            list.add( convertToDto( place ) );
        }

        return list;
    }

    private String restPlaceDtoGeoCodeLatitude(RestPlaceDto restPlaceDto) {
        if ( restPlaceDto == null ) {
            return null;
        }
        RestPlaceGeoCodeDto geoCode = restPlaceDto.getGeoCode();
        if ( geoCode == null ) {
            return null;
        }
        String latitude = geoCode.getLatitude();
        if ( latitude == null ) {
            return null;
        }
        return latitude;
    }

    private String restPlaceDtoGeoCodeLongitude(RestPlaceDto restPlaceDto) {
        if ( restPlaceDto == null ) {
            return null;
        }
        RestPlaceGeoCodeDto geoCode = restPlaceDto.getGeoCode();
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
