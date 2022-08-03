package com.edemirkirkan.thybackend.thy;

import com.edemirkirkan.thybackend.thy.dto.ThyBoardingPassRestDto;
import com.edemirkirkan.thybackend.thy.service.ThyRestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("api/v1/test")
public class TestController {

    private final ThyRestService service;

    @GetMapping("/boarding-pass/{pnr}")
    public ResponseEntity<ThyBoardingPassRestDto> printBoardingPass(
            @PathVariable(name=  "pnr") String pnr
    ) {
        return ResponseEntity.ok( service.printBoardingPass(pnr));
    }
}
