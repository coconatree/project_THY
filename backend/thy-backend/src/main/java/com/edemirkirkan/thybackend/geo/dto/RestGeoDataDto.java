package com.edemirkirkan.thybackend.geo.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class RestGeoDataDto {
    private String name;
    private String lat;
    private String lon;
    private String country;
}
