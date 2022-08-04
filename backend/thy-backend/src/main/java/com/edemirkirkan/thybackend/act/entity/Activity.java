package com.edemirkirkan.thybackend.act.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table
@Getter
@Setter
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long dbId;

    private Long id;

    @Column(length = 1024)
    private String name;

    private String latitude;

    private String longitude;

    private Double rating;

    @Column(length = 1024)
    private String bookingLink;

    private String queryLat;

    private String queryLon;

    @ElementCollection
    private List<String> pictures;
}
