package com.edemirkirkan.thybackend.cst.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Table
@Entity
@Getter
@Setter
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String pnr;

    private Boolean isReturnFlight;
    private String flightNumber;
    private String ticketNumber;

    @Column(length = 800)
    private String boardingPassQrCode;

    private String seatNumber;
    private String arrivalDate;
    private String arrivalTime;
    private String arrivalCityName;
    private String arrivalCountryCode;
    private String arrivalCountryName;
    private String departureDate;
    private String boardingTime;
    private String departureTime;
    private String departureCityName;
    private String departureCountryCode;
    private String checkInInfo;
    private String namePrefix;
    private String firstName;
    private String lastName;
}
