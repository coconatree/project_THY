package com.edemirkirkan.thybackend.usr.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Table(name = "USER")
@Entity
public class User {
    @
    private Long id;
    private String reservationId;
    private String firstName;
    private String lastName;
    private String city;
}
