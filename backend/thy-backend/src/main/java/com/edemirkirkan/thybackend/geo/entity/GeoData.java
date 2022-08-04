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

    @Column(unique = true)
    private String name;

    private String country;

    @Column(nullable = false)
    private String latitude;
    @Column(nullable = false)
    private String longitude;
}

