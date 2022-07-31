package com.edemirkirkan.thybackend.cst.dto;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;

@Data
@Builder
public class CustomerDto {
    private String reservationId;
    private String firstname;
    private String lastname;
    private String latitude;
    private String longitude;
}
