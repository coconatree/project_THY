package com.edemirkirkan.thybackend.act.dto;

import lombok.Data;

import java.util.List;

@Data
public class RestActivityDto {
    private Long id;
    private String name;
    private RestActivityGeoCodeDto geoCode;
    private Double rating;
    private List<String> pictures;
    private String bookingLink;
    private RestActivityPriceDto price;
}
