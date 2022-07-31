package com.edemirkirkan.thybackend.cst.dao;

import com.edemirkirkan.thybackend.cst.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerDao extends JpaRepository<Customer, Long> {
    Customer findByReservationId(String reservationId);
}
