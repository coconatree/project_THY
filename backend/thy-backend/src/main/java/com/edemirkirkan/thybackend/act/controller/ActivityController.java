package com.edemirkirkan.thybackend.act.controller;

import com.edemirkirkan.thybackend.act.dto.ActivityDto;
import com.edemirkirkan.thybackend.act.service.ActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/activities")
public class ActivityController {
    private final ActivityService activityService;

    @GetMapping("/{latitude}/{longitude}")
    public ResponseEntity<List<ActivityDto>> getActivities(@PathVariable String latitude,
                                                           @PathVariable String longitude) {
        return ResponseEntity.ok(activityService.retrieveAllActivities(latitude, longitude));
    }
}
