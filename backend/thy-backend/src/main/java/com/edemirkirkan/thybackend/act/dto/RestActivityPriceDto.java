package com.edemirkirkan.thybackend.act.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class RestActivityPriceDto {
    private String currencyCode;
    private BigDecimal amount;
}
