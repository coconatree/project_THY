package com.edemirkirkan.thybackend.plc.dto;

import lombok.Data;

import java.util.List;

@Data
public class RestPlaceListDto {
    List<RestPlaceDto> data;
}
