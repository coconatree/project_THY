package com.edemirkirkan.thybackend.act.dto;

import com.edemirkirkan.thybackend.act.entity.ActivityImage;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@Data
public class ActivityDto {
    private Long id;
    private String name;
    private String googleLocLink;
    private String appleLocLink;
    private Double rating;
    private Set<ActivityImage> pictures;
    private String bookingLink;
    private String currencyCode;
    private BigDecimal amount;
}
