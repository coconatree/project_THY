package com.edemirkirkan.thybackend.act.converter;

import com.edemirkirkan.thybackend.act.dto.RestActivityDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityGeoCodeDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityPriceDto;
import com.edemirkirkan.thybackend.act.entity.Activity;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-01T20:44:32+0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2 (Oracle Corporation)"
)
@Component
public class ActivityMapperImpl extends ActivityMapper {

    @Override
    public Activity convertToEntity(RestActivityDto restActivityDto) {
        if ( restActivityDto == null ) {
            return null;
        }

        Activity activity = new Activity();

        activity.setLatitude( restActivityDtoGeoCodeLatitude( restActivityDto ) );
        activity.setLongitude( restActivityDtoGeoCodeLongitude( restActivityDto ) );
        activity.setCurrencyCode( restActivityDtoPriceCurrencyCode( restActivityDto ) );
        activity.setAmount( restActivityDtoPriceAmount( restActivityDto ) );
        activity.setId( restActivityDto.getId() );
        activity.setName( restActivityDto.getName() );
        activity.setRating( restActivityDto.getRating() );
        List<String> list = restActivityDto.getPictures();
        if ( list != null ) {
            activity.setPictures( new ArrayList<String>( list ) );
        }
        activity.setBookingLink( restActivityDto.getBookingLink() );

        return activity;
    }

    @Override
    public List<Activity> convertToEntityList(List<RestActivityDto> restActivityDtos) {
        if ( restActivityDtos == null ) {
            return null;
        }

        List<Activity> list = new ArrayList<Activity>( restActivityDtos.size() );
        for ( RestActivityDto restActivityDto : restActivityDtos ) {
            list.add( convertToEntity( restActivityDto ) );
        }

        return list;
    }

    private Double restActivityDtoGeoCodeLatitude(RestActivityDto restActivityDto) {
        if ( restActivityDto == null ) {
            return null;
        }
        RestActivityGeoCodeDto geoCode = restActivityDto.getGeoCode();
        if ( geoCode == null ) {
            return null;
        }
        Double latitude = geoCode.getLatitude();
        if ( latitude == null ) {
            return null;
        }
        return latitude;
    }

    private Double restActivityDtoGeoCodeLongitude(RestActivityDto restActivityDto) {
        if ( restActivityDto == null ) {
            return null;
        }
        RestActivityGeoCodeDto geoCode = restActivityDto.getGeoCode();
        if ( geoCode == null ) {
            return null;
        }
        Double longitude = geoCode.getLongitude();
        if ( longitude == null ) {
            return null;
        }
        return longitude;
    }

    private String restActivityDtoPriceCurrencyCode(RestActivityDto restActivityDto) {
        if ( restActivityDto == null ) {
            return null;
        }
        RestActivityPriceDto price = restActivityDto.getPrice();
        if ( price == null ) {
            return null;
        }
        String currencyCode = price.getCurrencyCode();
        if ( currencyCode == null ) {
            return null;
        }
        return currencyCode;
    }

    private BigDecimal restActivityDtoPriceAmount(RestActivityDto restActivityDto) {
        if ( restActivityDto == null ) {
            return null;
        }
        RestActivityPriceDto price = restActivityDto.getPrice();
        if ( price == null ) {
            return null;
        }
        BigDecimal amount = price.getAmount();
        if ( amount == null ) {
            return null;
        }
        return amount;
    }
}
