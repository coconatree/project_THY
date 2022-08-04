package com.edemirkirkan.thybackend.config;

import org.springframework.context.annotation.Configuration;

import java.util.Collection;
import java.util.Set;

@Configuration
public class AppConfig {

    public static final Collection<String> SERVICE_CITIES = Set.of(
            "Bangladesh",
            "Barselona",
            "Berlin",
            "Dallas",
            "London",
            "New York",
            "Paris",
            "San Fransisco"
    );
}
