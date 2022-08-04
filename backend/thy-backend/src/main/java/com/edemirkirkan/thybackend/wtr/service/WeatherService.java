package com.edemirkirkan.thybackend.wtr.service;

import com.edemirkirkan.thybackend.rst.service.RestService;
import com.edemirkirkan.thybackend.wtr.converter.WeatherMapper;
import com.edemirkirkan.thybackend.wtr.dao.WeatherDao;
import com.edemirkirkan.thybackend.wtr.dto.RestWeatherDto;
import com.edemirkirkan.thybackend.wtr.dto.WeatherDto;
import com.edemirkirkan.thybackend.wtr.entity.Weather;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WeatherService {
    private final RestService restService;
    private final WeatherMapper mapper;
    private final WeatherDao dao;

    public WeatherDto getCurrentWeatherData(String latitude, String longitude) {
        RestWeatherDto restWeatherDto = restService.weatherRequest(latitude, longitude);
        Weather weather = mapper.convertToEntity(restWeatherDto);
        weather = dao.save(weather);

        return mapper.convertToDto(weather);
    }
}
