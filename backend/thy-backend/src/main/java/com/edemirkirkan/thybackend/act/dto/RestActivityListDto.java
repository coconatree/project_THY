package com.edemirkirkan.thybackend.act.dto;

import lombok.Data;

import java.util.List;

@Data
public class RestActivityListDto {
    List<RestActivityDto> data;
}
