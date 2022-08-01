package com.edemirkirkan.thybackend.geo.rst;

import lombok.Data;

import java.util.List;

@Data
public class RestGeoDataDto {
    private List<RestGeoDto> data;
}
