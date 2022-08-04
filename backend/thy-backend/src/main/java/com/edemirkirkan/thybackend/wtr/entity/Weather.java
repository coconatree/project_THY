package com.edemirkirkan.thybackend.wtr.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
public class Weather {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String mainDescription;

    private String briefDescription;

    private String iconPng;

    private String temperature;

    private String feelsLikeTemperature;

    private Long dt;

    private String name;

}
