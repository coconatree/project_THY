package com.edemirkirkan.thybackend.geo.controller;

import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.geo.service.GeoDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/geodata")
@RequiredArgsConstructor
public class GeoController {
    private final GeoDataService geoDataService;

    @GetMapping("/{cityName}")
    public ResponseEntity<GeoDataDto> getGeoData(@PathVariable String cityName) {
        GeoDataDto geoDataDto = geoDataService.retrieveGeoData(cityName);
        return ResponseEntity.ok(geoDataDto);
    }
}
