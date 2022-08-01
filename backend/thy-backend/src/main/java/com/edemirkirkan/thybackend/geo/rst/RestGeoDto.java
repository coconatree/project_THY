package com.edemirkirkan.thybackend.geo.rst;

import lombok.Data;

@Data
public class RestGeoDto {
    private String type;
    private String subtype;
    private String name;
    private String iataCode;
    private RestGeoCodeDto geoCode;
}
