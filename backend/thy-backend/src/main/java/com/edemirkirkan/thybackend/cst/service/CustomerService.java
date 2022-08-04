package com.edemirkirkan.thybackend.cst.service;


import com.edemirkirkan.thybackend.config.AppConfig;
import com.edemirkirkan.thybackend.cst.converter.CustomerMapper;
import com.edemirkirkan.thybackend.cst.dao.CustomerDao;
import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import com.edemirkirkan.thybackend.geo.dto.RestGeoDataDto;
import com.edemirkirkan.thybackend.rst.service.RestService;
import com.edemirkirkan.thybackend.thy.dto.ThyBoardingPassRestDto;
import com.edemirkirkan.thybackend.thy.service.ThyRestService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final ThyRestService thyRestService;
    private final RestService amedeusRestService;
    private final CustomerMapper mapper;
    private final CustomerDao customerDao;

    public CustomerDto retieveCustomerByReservationId(String pnr, String firstname, String lastname) throws RuntimeException {

        Customer customer = customerDao.findByPnr(pnr);

        if (customer == null) {
            ThyBoardingPassRestDto boardingPass = thyRestService.printBoardingPass(pnr);

            //TODO

            // Get the city code for destination

            // Convert city code to city name

            String arrivalCityName = "";

            // Check if it is in our list


            // If so retrive location data from the amedeus data for the city

            // RestGeoDataDto restGeoDto = amedeusRestService.geoDataRequest(arrivalCityName);

            // Create the customer dto

            customer = Customer.builder()
                    .firstname(firstname)
                    .lastname(lastname)
                    .pnr(pnr)
                    .departureCityName("")
                    .arrivalCityName("")
                    .arrivalCitylatitude("")
                    .arrivalCitylongitude("")
                    .build();

            customer = customerDao.save(customer);
        }

        return mapper.convertToDto(customer);
    }

}
