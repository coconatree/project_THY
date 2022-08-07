package com.edemirkirkan.thybackend.wtr.converter;

import com.edemirkirkan.thybackend.wtr.dto.RestMainDto;
import com.edemirkirkan.thybackend.wtr.dto.RestWeatherDto;
import com.edemirkirkan.thybackend.wtr.dto.WeatherDto;
import com.edemirkirkan.thybackend.wtr.entity.Weather;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-07T20:55:30+0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2 (Oracle Corporation)"
)
@Component
public class WeatherMapperImpl extends WeatherMapper {

    @Override
    public Weather convertToEntity(RestWeatherDto restWeatherDto) {
        if ( restWeatherDto == null ) {
            return null;
        }

        Weather weather = new Weather();

        weather.setTemperature( restWeatherDtoMainTemp( restWeatherDto ) );
        weather.setFeelsLikeTemperature( restWeatherDtoMainFeels_like( restWeatherDto ) );
        weather.setDt( restWeatherDto.getDt() );

        customMapping( restWeatherDto, weather );

        return weather;
    }

    @Override
    public List<Weather> convertToEntityList(List<RestWeatherDto> restWeatherDtos) {
        if ( restWeatherDtos == null ) {
            return null;
        }

        List<Weather> list = new ArrayList<Weather>( restWeatherDtos.size() );
        for ( RestWeatherDto restWeatherDto : restWeatherDtos ) {
            list.add( convertToEntity( restWeatherDto ) );
        }

        return list;
    }

    @Override
    public WeatherDto convertToDto(Weather weather) {
        if ( weather == null ) {
            return null;
        }

        WeatherDto weatherDto = new WeatherDto();

        weatherDto.setMainDescription( weather.getMainDescription() );
        weatherDto.setTemperature( weather.getTemperature() );
        weatherDto.setFeelsLikeTemperature( weather.getFeelsLikeTemperature() );

        customMapping( weather, weatherDto );

        return weatherDto;
    }

    @Override
    public List<WeatherDto> convertToDtoList(List<Weather> weathers) {
        if ( weathers == null ) {
            return null;
        }

        List<WeatherDto> list = new ArrayList<WeatherDto>( weathers.size() );
        for ( Weather weather : weathers ) {
            list.add( convertToDto( weather ) );
        }

        return list;
    }

    private String restWeatherDtoMainTemp(RestWeatherDto restWeatherDto) {
        if ( restWeatherDto == null ) {
            return null;
        }
        RestMainDto main = restWeatherDto.getMain();
        if ( main == null ) {
            return null;
        }
        String temp = main.getTemp();
        if ( temp == null ) {
            return null;
        }
        return temp;
    }

    private String restWeatherDtoMainFeels_like(RestWeatherDto restWeatherDto) {
        if ( restWeatherDto == null ) {
            return null;
        }
        RestMainDto main = restWeatherDto.getMain();
        if ( main == null ) {
            return null;
        }
        String feels_like = main.getFeels_like();
        if ( feels_like == null ) {
            return null;
        }
        return feels_like;
    }
}
