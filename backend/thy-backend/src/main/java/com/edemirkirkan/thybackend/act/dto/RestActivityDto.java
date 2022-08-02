package com.edemirkirkan.thybackend.act.dto;

import com.edemirkirkan.thybackend.act.entity.ActivityImage;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
public class RestActivityDto {
    private Long id;
    private String name;
    private RestActivityGeoCodeDto geoCode;
    private Double rating;
    private Set<ActivityImage> pictures;
    private String bookingLink;
    private RestActivityPriceDto price;
}
