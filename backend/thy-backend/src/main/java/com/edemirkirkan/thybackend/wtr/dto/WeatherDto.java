package com.edemirkirkan.thybackend.wtr.dto;

import lombok.Data;

@Data
public class WeatherDto {
    private String mainDescription;
    private String description;
    private String iconLink;
    private String temperature;
    private String feelsLikeTemperature;
    private String dayAndHour;
    private String name;
}
