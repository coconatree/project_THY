package com.edemirkirkan.thybackend.cst.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Table
@Entity
@Getter
@Setter
@Builder
@ToString
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String pnr;

    @Column(nullable = false)
    private String firstname;

    @Column(nullable = false)
    private String lastname;

    @Column(nullable = false)
    private String departureCityName;

    @Column(nullable = false)
    private String arrivalCityName;

    @Column(nullable = false)
    private String arrivalCitylatitude;

    @Column(nullable = false)
    private String arrivalCitylongitude;
}
