package com.back_end.model.dummy_model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class HotelMockDTO {
    private String name;
    private String location;
    private Long price;
    private Long rating;
}
