package com.edemirkirkan.thybackend.rst.dto;

import lombok.Data;

import java.util.List;

@Data
public class RestGeoDataDto {
    private List<RestGeoDto> data;
}
