package com.edemirkirkan.thybackend.geo.dto;

import com.edemirkirkan.thybackend.rst.dto.RestGeoCodeDto;
import lombok.Data;

@Data
public class GeoDataDto {
    private String type;
    private String subType;
    private String name;
    private String iataCode;
    private String latitude;
    private String longitude;
}
