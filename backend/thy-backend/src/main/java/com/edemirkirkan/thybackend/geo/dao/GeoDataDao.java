package com.edemirkirkan.thybackend.geo.dao;

import com.edemirkirkan.thybackend.geo.entity.GeoData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GeoDataDao extends JpaRepository<GeoData, Long> {
    GeoData findByName(String name);
}
