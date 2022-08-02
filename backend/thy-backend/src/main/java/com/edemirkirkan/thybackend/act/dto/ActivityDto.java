package com.edemirkirkan.thybackend.act.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class ActivityDto {
    private Long id;
    private String name;
    private String googleLocLink;
    private String appleLocLink;
    private Double rating;
    private List<String> pictures;
    private String bookingLink;
    private String currencyCode;
    private BigDecimal amount;
}
