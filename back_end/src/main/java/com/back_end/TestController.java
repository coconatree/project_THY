package com.back_end;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("api/test")
public class TestController {

    @GetMapping("/")
    public ResponseEntity<Collection<MemberDTO>> retrieveMemebers() {
        return ResponseEntity.ok(
                List.of(
                    MemberDTO.builder().name("Emre").build(),
                    MemberDTO.builder().name("Berk").build(),
                    MemberDTO.builder().name("Gulcin").build(),
                    MemberDTO.builder().name("Ege").build()
                ));
    }
}
