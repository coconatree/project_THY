package com.edemirkirkan.thybackend.geo.dao;

import com.edemirkirkan.thybackend.geo.entity.GeoData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface GeoDataDao extends JpaRepository<GeoData, Long> {
    @Query("select g from GeoData  g where lower(g.name) = lower(?1)")
    GeoData findByNameIgnoreCase(String name);
}
