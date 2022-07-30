package com.back_end.model.dummy_model;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class EventMockDTO {
    private String name;
    private String location;
    private Date startDate;
    private Date endDate;
}
