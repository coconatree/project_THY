package com.edemirkirkan.thybackend.cst.controller;

import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/customers")
public class CustomerController {

    private final CustomerService customerService;
    
    @GetMapping("/{reservationId}")
    public ResponseEntity<CustomerDto> getCustomer(
        @PathVariable(name = "reservationId") String reservationId
    )
    {
        return ResponseEntity.ok(customerService.retieveCustomerByReservationId(reservationId));
    }
}
