package com.edemirkirkan.thybackend.plc.controller;

import com.edemirkirkan.thybackend.act.dto.ActivityDto;
import com.edemirkirkan.thybackend.act.service.ActivityService;
import com.edemirkirkan.thybackend.plc.dto.PlaceDto;
import com.edemirkirkan.thybackend.plc.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/places")
public class PlaceController {
    private final PlaceService placeService;

    @GetMapping("/{latitude}/{longitude}")
    public ResponseEntity<List<PlaceDto>> getPlaces(@PathVariable String latitude,
                                                        @PathVariable String longitude) {
        return ResponseEntity.ok(placeService.getPlaces(latitude, longitude));
    }
}
