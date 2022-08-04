package com.edemirkirkan.thybackend.wtr.dao;

import com.edemirkirkan.thybackend.wtr.entity.Weather;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherDao extends JpaRepository<Weather, Long>  {

}

