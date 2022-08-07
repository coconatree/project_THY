package com.edemirkirkan.thybackend.act.converter;

import com.edemirkirkan.thybackend.act.dto.ActivityDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityDto;
import com.edemirkirkan.thybackend.act.dto.RestActivityGeoCodeDto;
import com.edemirkirkan.thybackend.act.entity.Activity;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-07T08:12:35+0300",
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
        activity.setId( restActivityDto.getId() );
        activity.setName( restActivityDto.getName() );
        activity.setRating( restActivityDto.getRating() );
        activity.setBookingLink( restActivityDto.getBookingLink() );
        List<String> list = restActivityDto.getPictures();
        if ( list != null ) {
            activity.setPictures( new ArrayList<String>( list ) );
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
        List<String> list = activity.getPictures();
        if ( list != null ) {
            activityDto.setPictures( new ArrayList<String>( list ) );
        }
        activityDto.setBookingLink( activity.getBookingLink() );

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
}
