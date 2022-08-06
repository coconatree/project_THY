package com.edemirkirkan.thybackend.cst.dto;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;

@Data
@Builder
public class CustomerDto {
    private String pnr; // XYZTBZ
    private Boolean isReturnFlight; // false, true olduğunda welcome yerine welcome back yazabiliriz ana ekranda
    private String flightNumber; // 1975
    private String ticketNumber; // 2352676743796
    private String boardingPassQrCode; // yolcu biletinde bulunan qr code'un uzun bir stringi,
    // react'te bunu qr code olarak display etmenin bi yolunu bulabiliriz

    private String seatNumber; // 12D

    private String arrivalDate; // 2018-09-06
    private String arrivalTime; // 10:00
    private String arrivalCityName; // DUBAI
    private String arrivalCountryCode; // IE

    private String departureDate; // 2018-09-06
    private String boardingTime; // 06:15
    private String departureTime; // 07:15
    private String departureCityName; // ISTANBUL
    private String departureCountryCode; // TR

    private String checkInInfo; // Has not checked in or Checked in at 2018-09-05, 04:27

    private String namePrefix; // Mr or Ms
    private String firstName; // MEHMETALI
    private String lastName; // SENTURK
}
