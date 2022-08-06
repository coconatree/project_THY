package com.edemirkirkan.thybackend.plc.dto;

import lombok.Data;

import java.util.List;

@Data
public class RestPlaceDto {
    String id;
    RestPlaceGeoCodeDto geoCode;
    String name;
    String category;
    Integer rank;
    List<String> tags;


}
