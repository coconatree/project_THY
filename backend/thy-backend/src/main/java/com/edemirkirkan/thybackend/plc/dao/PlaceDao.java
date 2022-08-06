package com.edemirkirkan.thybackend.plc.dao;

import com.edemirkirkan.thybackend.plc.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceDao extends JpaRepository<Place, Long> {
     List<Place> findAllByQueryLatAndQueryLon(String lat, String lon);
}
