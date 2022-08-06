package com.edemirkirkan.thybackend.plc.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@Getter
@Setter
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long dbId;

    private String id;

    private String queryLat;

    private String queryLon;

    private String latitude;

    private String longitude;

    private String name;

    private String category;

    private Integer rank;

    @ElementCollection
    private List<String> tags;
}
