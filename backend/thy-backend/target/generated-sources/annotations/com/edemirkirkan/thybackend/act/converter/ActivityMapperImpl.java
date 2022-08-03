package com.edemirkirkan.thybackend.act.converter;

import com.edemirkirkan.thybackend.act.dto.ActivityDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityGeoCodeDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityPriceDto;
import com.edemirkirkan.thybackend.act.entity.Activity;
import com.edemirkirkan.thybackend.act.entity.ActivityImage;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-03T23:38:56+0300",
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
        activity.setBookingLink( restActivityDto.getBookingLink() );
        Set<ActivityImage> set = restActivityDto.getPictures();
        if ( set != null ) {
            activity.setPictures( new LinkedHashSet<ActivityImage>( set ) );
        }

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

    @Override
    public ActivityDto convertToDto(Activity activity) {
        if ( activity == null ) {
            return null;
        }

        ActivityDto activityDto = new ActivityDto();

        activityDto.setId( activity.getId() );
        activityDto.setName( activity.getName() );
        activityDto.setRating( activity.getRating() );
        Set<ActivityImage> set = activity.getPictures();
        if ( set != null ) {
            activityDto.setPictures( new LinkedHashSet<ActivityImage>( set ) );
        }
        activityDto.setBookingLink( activity.getBookingLink() );
        activityDto.setCurrencyCode( activity.getCurrencyCode() );
        activityDto.setAmount( activity.getAmount() );

        customMapping( activity, activityDto );

        return activityDto;
    }

    @Override
    public List<ActivityDto> convertToDtoList(List<Activity> activities) {
        if ( activities == null ) {
            return null;
        }

        List<ActivityDto> list = new ArrayList<ActivityDto>( activities.size() );
        for ( Activity activity : activities ) {
            list.add( convertToDto( activity ) );
        }

        return list;
    }

    private String restActivityDtoGeoCodeLatitude(RestActivityDto restActivityDto) {
        if ( restActivityDto == null ) {
            return null;
        }
        RestActivityGeoCodeDto geoCode = restActivityDto.getGeoCode();
        if ( geoCode == null ) {
            return null;
        }
        String latitude = geoCode.getLatitude();
        if ( latitude == null ) {
            return null;
        }
        return latitude;
    }

    private String restActivityDtoGeoCodeLongitude(RestActivityDto restActivityDto) {
        if ( restActivityDto == null ) {
            return null;
        }
        RestActivityGeoCodeDto geoCode = restActivityDto.getGeoCode();
        if ( geoCode == null ) {
            return null;
        }
        String longitude = geoCode.getLongitude();
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
