package com.edemirkirkan.thybackend.wtr.converter;


import com.edemirkirkan.thybackend.wtr.dto.RestSummaryDto;
import com.edemirkirkan.thybackend.wtr.dto.RestWeatherDto;
import com.edemirkirkan.thybackend.wtr.dto.WeatherDto;
import com.edemirkirkan.thybackend.wtr.entity.Weather;
import org.apache.commons.lang3.text.WordUtils;
import org.mapstruct.*;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Calendar;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public abstract class WeatherMapper {
    @Mapping(target = "temperature", source = "main.temp")
    @Mapping(target = "feelsLikeTemperature", source = "main.feels_like")
    public abstract Weather convertToEntity(RestWeatherDto restWeatherDto);

    public abstract WeatherDto convertToDto(Weather weather);

    @AfterMapping
    protected void customMapping(Weather weather, @MappingTarget WeatherDto weatherDto) {
        Instant instant = Instant.ofEpochSecond(weather.getDt());
        java.util.Date currentDate = Date.from(instant);
        Calendar c = Calendar.getInstance();
        c.setTime(currentDate);
        int timeOfDay = c.get(Calendar.HOUR_OF_DAY);
        String dayPeriod = "";
        if(timeOfDay >= 0 && timeOfDay < 5){
            dayPeriod = "Night";
        }
        else if(timeOfDay >= 5 && timeOfDay < 12){
            dayPeriod = "Morning";
        }
        else if(timeOfDay >= 12 && timeOfDay < 16){
            dayPeriod = "Afternoon";
        }
        else if(timeOfDay >= 16 && timeOfDay < 21){
            dayPeriod = "Evening";
        }
        else if(timeOfDay >= 21 && timeOfDay < 24){
            dayPeriod = "Night";
        }

        DateFormat df = new SimpleDateFormat("dd MMMM yyyy");
        String currentDateStr = df.format(currentDate) + " " + dayPeriod;

        weatherDto.setDayAndHour(currentDateStr);
        weatherDto.setIconLink("https://openweathermap.org/img/wn/" + weather.getIconPng() + "@2x.png");
        weatherDto.setDescription(WordUtils.capitalizeFully(weather.getBriefDescription()));
    }

    @AfterMapping
    protected void customMapping(RestWeatherDto restWeatherDto, @MappingTarget Weather weather) {
        if (restWeatherDto.getWeather() == null || restWeatherDto.getWeather().size() == 0) {
            throw new RuntimeException("Null or empty weather response!");
        }
        RestSummaryDto restSummaryDto = restWeatherDto.getWeather().get(0);
        weather.setMainDescription(restSummaryDto.getMain());
        weather.setBriefDescription(restSummaryDto.getDescription());
        weather.setIconPng(restSummaryDto.getIcon());
    }

}
