package com.edemirkirkan.thybackend.cst.service;


import com.edemirkirkan.thybackend.cst.converter.CustomerMapper;
import com.edemirkirkan.thybackend.cst.dao.CustomerDao;
import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import com.edemirkirkan.thybackend.rst.service.RestService;
import com.edemirkirkan.thybackend.thy.dto.ThyBoardingPassRestDto;
import com.edemirkirkan.thybackend.thy.service.ThyRestService;
import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final ThyRestService thyRestService;
    private final RestService amedeusRestService;
    private final CustomerMapper mapper;
    private final CustomerDao customerDao;

    public CustomerDto retieveCustomerByReservationId(String pnr) {

        Customer customer = customerDao.findByPnr(pnr);

        if (customer == null) {
            ThyBoardingPassRestDto boardingPass = thyRestService.printBoardingPass(pnr);

            //TODO

            // Get the city code for destination

            // Convert city code to city name

            // Check if it is in our list

            // If so retrive location data from the amedeus data for the city

            // Create the customer dto

            customer = Customer.builder()
                    .firstname("Emre")
                    .lastname("Can")
                    .pnr("21312413")
                    .departureCityName("Istanbul")
                    .arrivalCityName("Ankara")
                    .build();

            customer = customerDao.save(customer);
        }

        return mapper.convertToDto(customer);
    }
}
