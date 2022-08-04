package com.edemirkirkan.thybackend.wtr.converter;

import com.edemirkirkan.thybackend.wtr.dto.RestMainDto;
import com.edemirkirkan.thybackend.wtr.dto.RestWeatherDto;
import com.edemirkirkan.thybackend.wtr.dto.WeatherDto;
import com.edemirkirkan.thybackend.wtr.entity.Weather;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-04T05:09:56+0300",
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
        weather.setName( restWeatherDto.getName() );

        customMapping( restWeatherDto, weather );

        return weather;
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
        weatherDto.setName( weather.getName() );

        customMapping( weather, weatherDto );

        return weatherDto;
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
