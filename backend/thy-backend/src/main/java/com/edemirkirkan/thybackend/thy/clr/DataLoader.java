package com.edemirkirkan.thybackend.thy.clr;

import com.edemirkirkan.thybackend.thy.service.ThyRestService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final ThyRestService service;

    @Override
    public void run(String... args) throws Exception {
        service.printBoardingPass("TXH3Y8Z");
    }
}
