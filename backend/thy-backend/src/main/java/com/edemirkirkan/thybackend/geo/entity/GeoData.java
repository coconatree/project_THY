package com.edemirkirkan.thybackend.geo.entity;

import lombok.*;

import javax.persistence.*;


@Table
@Entity
@Getter
@Setter
@ToString
public class GeoData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String type;
    private String subType;

    @Column(unique = true)
    private String name;

    private String iataCode;

    @Column(nullable = false)
    private String latitude;
    @Column(nullable = false)
    private String longitude;
}

