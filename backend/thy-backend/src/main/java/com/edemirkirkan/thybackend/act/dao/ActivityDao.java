package com.edemirkirkan.thybackend.act.dao;

import com.edemirkirkan.thybackend.act.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ActivityDao extends JpaRepository<Activity, Long> {
    public List<Activity> findAllByQueryLatAndQueryLon(String latitude, String longitude);
}
