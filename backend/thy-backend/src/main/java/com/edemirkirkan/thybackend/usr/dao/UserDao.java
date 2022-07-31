package com.edemirkirkan.thybackend.usr.dao;

import com.edemirkirkan.thybackend.usr.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<Customer, Long> {}
