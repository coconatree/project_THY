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
    private String flightNumber;
    private Boolean isReturnFlight;
    private String arrivalDate;
    private String arrivalTime;
    private String arrivalCityCode;
    private String arrivalCountryCode;
    private String departureDate;
    private String departureTime;
    private String departureCityName;
    private String arrivalCityName;
    private String arrivalCityLatitude;
    private String arrivalCityLongitude;
}
