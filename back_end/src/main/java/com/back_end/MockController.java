package com.back_end;

import com.back_end.model.dummy_model.EventMockDTO;
import com.back_end.model.dummy_model.HotelMockDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/v1/mock")
public class MockController {

    @GetMapping("/hotel")
    public ResponseEntity<Collection<HotelMockDTO>> retrieveMockHotelCollection() {
        return ResponseEntity.ok(
                List.of(
                        HotelMockDTO.builder()
                                .name("Hotel Berlin")
                                .rating(5L)
                                .price(500L)
                                .location("Berlin")
                                .build(),
                        HotelMockDTO.builder()
                                .name("Frankfurt Hotel")
                                .rating(4L)
                                .price(530L)
                                .location("Frankfurt")
                                .build(),
                        HotelMockDTO.builder()
                                .name("Hotel Incredible London")
                                .rating(5L)
                                .price(500L)
                                .location("London")
                                .build(),
                        HotelMockDTO.builder()
                                .name("Kasımpasa Hotel")
                                .rating(3L)
                                .price(300L)
                                .location("İstanbul")
                                .build(),
                        HotelMockDTO.builder()
                                .name("Tunali Hilmi Hilton")
                                .rating(4L)
                                .price(700L)
                                .location("Ankara")
                                .build()
                )
        );
    }

    @GetMapping("/event")
    public ResponseEntity<Collection<EventMockDTO>> retrieveMockEventCollection() {

        Date mockDate = new Date(System.currentTimeMillis());

        return ResponseEntity.ok(
            List.of(
                    EventMockDTO.builder()
                            .name("Amazing Mountain Trip")
                            .location("Ankara")
                            .startDate(mockDate)
                            .endDate(mockDate)
                            .build(),
                    EventMockDTO.builder()
                            .name("Beautiful Botanic Garden Trip")
                            .location("London")
                            .startDate(mockDate)
                            .endDate(mockDate)
                            .build(),
                    EventMockDTO.builder()
                            .name("Costume Party")
                            .location("Berlin")
                            .startDate(mockDate)
                            .endDate(mockDate)
                            .build()
            )
        );
    }
}
