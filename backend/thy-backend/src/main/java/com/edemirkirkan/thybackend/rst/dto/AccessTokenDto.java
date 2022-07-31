package com.edemirkirkan.thybackend.rst.dto;

import lombok.Data;

@Data
public class AccessTokenDto {
    private String type;
    private String username;
    private String application_name;
    private String client_id;
    private String token_type;
    private String access_token;
    private Long expires_in;
    private String state;
    private String scope;
}
