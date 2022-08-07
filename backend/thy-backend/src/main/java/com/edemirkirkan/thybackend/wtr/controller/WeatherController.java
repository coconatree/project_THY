package com.edemirkirkan.thybackend.wtr.controller;

import com.edemirkirkan.thybackend.wtr.dto.WeatherDto;
import com.edemirkirkan.thybackend.wtr.service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/weather")
@RequiredArgsConstructor
public class WeatherController {
    private final WeatherService weatherService;

    @GetMapping("/{latitude}/{longitude}")
    public ResponseEntity<List<WeatherDto>> getCurrentWeatherData(
            @PathVariable String latitude, @PathVariable String longitude) {
        List<WeatherDto> weatherDtos = weatherService.getCurrentWeatherData(latitude, longitude);
        return ResponseEntity.ok(weatherDtos);
    }
}
