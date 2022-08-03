package com.edemirkirkan.thybackend.config;

import com.edemirkirkan.thybackend.rst.dto.RestConstant;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.logging.Level;

@Log
@Configuration
public class BeanConfig {

    // @Value("${thy.api.key}")
    private static String THY_API_KEY = "l7xx57237ce9aa684863b51594f41e33cba8";

    // @Value("${thy.api.secret}")
    private static String THY_API_SECRET = "7f1bbd218b434b2881e2d9c869ba09ad";

    @Bean(name = "thy_rest_template")
    public RestTemplate createThyRestTemplate() {
        return new RestTemplate();
    }

    @Bean(name = "thy_headers")
    public HttpHeaders createThyRequestHeard() {
        HttpHeaders headers = new HttpHeaders();

        headers.set("apikey", THY_API_KEY);
        headers.set("apisecret", THY_API_SECRET);

        log.log(Level.WARNING, "API_KEY" + THY_API_KEY);
        log.log(Level.WARNING, "API_SECRET" + THY_API_SECRET);

        return headers;
    }

    //TODO
    //Will be used later !!!

    private MultiValueMap<String, String> buildPostMap() {
        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("grant_type", RestConstant.GRANT_TYPE);
        map.add("client_id", RestConstant.CLIENT_ID);
        map.add("client_secret", RestConstant.CLIENT_SECRET);
        return map;
    }
}
