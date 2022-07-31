package com.edemirkirkan.thybackend.usr.entity;

import javax.persistence.*;

@Table(name = "USER")
@Entity
public class User {

    @Id
    @GeneratedValue(generator = "User")
    @SequenceGenerator(name = "User", sequenceName = "User")
    private Long id;

    private String reservationId;
    private String firstName;
    private String lastName;
    private String city;
}
