package com.edemirkirkan.thybackend.plc.dto;

import lombok.Data;

import java.util.List;

@Data
public class PlaceDto {
    private String id;
    private String googleLocLink;
    private String appleLocLink;
    private String name;
    private String category;
    private Integer rank;
    private List<String> tags;
}
