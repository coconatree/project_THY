package com.edemirkirkan.thybackend.rst;

import com.edemirkirkan.thybackend.rst.dto.RestGeoDataDto;
import com.edemirkirkan.thybackend.rst.dto.RestGeoDto;
import com.edemirkirkan.thybackend.rst.service.RestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class DummyController {
    private final RestService restService;
    @GetMapping
    public RestGeoDto dummyController() {
        RestGeoDto restGeoDto = restService.geoDataRequest("PARIS");
        return restGeoDto;
    }
}
