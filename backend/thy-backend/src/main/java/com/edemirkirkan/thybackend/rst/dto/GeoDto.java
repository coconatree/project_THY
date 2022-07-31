package com.edemirkirkan.thybackend.rst.dto;

import lombok.Data;

@Data
public class GeoDto {
    private String type;
    private String subtype;
    private String name;
    private String iataCode;
    private GeoCodeDto geoCode;
}
