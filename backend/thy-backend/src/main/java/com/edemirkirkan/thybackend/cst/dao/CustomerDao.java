package com.edemirkirkan.thybackend.cst.dao;

import com.edemirkirkan.thybackend.cst.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerDao extends JpaRepository<Customer, Long> {
    Customer findByPnr(String pnr);
}
