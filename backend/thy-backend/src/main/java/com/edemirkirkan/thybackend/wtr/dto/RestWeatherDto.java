package com.edemirkirkan.thybackend.wtr.dto;

import lombok.Data;

import java.util.List;

@Data
public class RestWeatherDto {
    List<RestSummaryDto> weather;
    RestMainDto main;
    Long dt;
}
