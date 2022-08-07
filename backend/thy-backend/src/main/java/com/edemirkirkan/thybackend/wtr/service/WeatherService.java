package com.edemirkirkan.thybackend.wtr.service;

import com.edemirkirkan.thybackend.wtr.converter.WeatherMapper;
import com.edemirkirkan.thybackend.wtr.dao.WeatherDao;
import com.edemirkirkan.thybackend.wtr.dto.RestWeatherDto;
import com.edemirkirkan.thybackend.wtr.dto.RestWeatherListDto;
import com.edemirkirkan.thybackend.wtr.dto.WeatherDto;
import com.edemirkirkan.thybackend.wtr.entity.Weather;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.Instant;
import java.util.*;

@Service
@RequiredArgsConstructor
public class WeatherService {
    private final WeatherRestService restService;
    private final WeatherMapper mapper;
    private final WeatherDao dao;

    public List<WeatherDto> getCurrentWeatherData(String latitude, String longitude) {
        RestWeatherListDto restWeatherListDto = restService.weatherRequest(latitude, longitude);
        List<RestWeatherDto> restWeatherDtos = restWeatherListDto.getList();
        List<String> periods = new ArrayList<>();
        List<RestWeatherDto> filteredRestWeatherDtos = new ArrayList<>();
        for (RestWeatherDto restWeatherDto : restWeatherDtos) {
            Instant instant = Instant.ofEpochSecond(restWeatherDto.getDt());
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
            if (!periods.contains(dayPeriod)) {
                filteredRestWeatherDtos.add(restWeatherDto);
                periods.add(dayPeriod);
            }
            if (periods.size() == 4) {
                break;
            }
        }
        List<Weather> weathers = mapper.convertToEntityList(filteredRestWeatherDtos);
        weathers = dao.saveAll(weathers);

        return mapper.convertToDtoList(weathers);
    }
}
