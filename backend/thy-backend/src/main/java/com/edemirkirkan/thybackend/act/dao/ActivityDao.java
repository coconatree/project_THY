package com.edemirkirkan.thybackend.act.dao;

import com.edemirkirkan.thybackend.act.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ActivityDao extends JpaRepository<Activity, Long> {
}
