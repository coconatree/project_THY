package com.edemirkirkan.thybackend.wtr.dto;

import lombok.Data;

import java.util.List;

@Data
public class RestWeatherListDto {
    List<RestWeatherDto> list;
}
