package com.edemirkirkan.thybackend.cst.controller;

import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/customer")
public class CustomerController {

    private final CustomerService customerService;
    
    @GetMapping("search/{pnr}")
    public ResponseEntity<CustomerDto> getCustomer(@PathVariable(name = "pnr") String pnr) {
        CustomerDto customerDto = customerService.retieveCustomerByReservationId(pnr);
        return ResponseEntity.ok(customerDto);
    }
}
