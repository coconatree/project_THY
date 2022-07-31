package com.edemirkirkan.thybackend.usr.entity;

import javax.persistence.*;

@Table
@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String reservationId;
    private String firstName;
    private String lastName;
    private String city;
}
