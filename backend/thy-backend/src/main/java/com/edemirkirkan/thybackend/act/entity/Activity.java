package com.edemirkirkan.thybackend.act.entity;

import com.edemirkirkan.thybackend.cst.converter.StringListConverter;
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

    @Lob
    @Column
    @Convert(converter = StringListConverter.class)
    private List<String> pictures;

    @Column(length = 1024)
    private String bookingLink;

    private String currencyCode;

    @Column(precision = 19, scale = 2)
    private BigDecimal amount;

    private String queryLat;

    private String queryLon;
}
