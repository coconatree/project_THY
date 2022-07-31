package com.edemirkirkan.thybackend.geo.entity;

import com.edemirkirkan.thybackend.rst.dto.GeoCodeDto;
import lombok.*;

import javax.persistence.*;


@Table(name = "GEO_DATA")
@Entity
@Getter
@Setter
@ToString
public class GeoData {

    @Id
    @GeneratedValue(generator = "GeoData")
    @SequenceGenerator(name = "GeoData", sequenceName = "GeoData")
    private Long id;

    private String type;
    private String subType;

    @Column(unique = true)
    private String name;

    private String iataCode;

    @Column(nullable = false)
    private GeoCodeDto geoCode;
}

