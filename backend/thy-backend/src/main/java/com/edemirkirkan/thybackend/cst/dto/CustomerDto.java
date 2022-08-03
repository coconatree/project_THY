package com.edemirkirkan.thybackend.cst.dto;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;

@Data
@Builder
public class CustomerDto {
    private String pnr;
    private String firstname;
    private String lastname;
    private String departureCityName;
    private String arrivalCityName;
    private String arrivalCitylatitude;
    private String arrivalCitylongitude;
}
