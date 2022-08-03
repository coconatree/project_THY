package com.edemirkirkan.thybackend.cst.service;


import com.edemirkirkan.thybackend.config.AppConfig;
import com.edemirkirkan.thybackend.cst.converter.CustomerMapper;
import com.edemirkirkan.thybackend.cst.dao.CustomerDao;
import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.geo.rst.RestGeoDataDto;
import com.edemirkirkan.thybackend.geo.rst.RestGeoDto;
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

    public CustomerDto retieveCustomerByReservationId(String pnr) throws RuntimeException {

        Customer customer = customerDao.findByPnr(pnr);

        if (customer == null) {
            ThyBoardingPassRestDto boardingPass = thyRestService.printBoardingPass(pnr);

            //TODO

            // Get the city code for destination

            // Convert city code to city name

            String arrivalCityName = "";

            // Check if it is in our list

            if (isCityInService(arrivalCityName)) {
                throw new RuntimeException("Sorry but our application currently doesn't sypport the given destination");
            }

            // If so retrive location data from the amedeus data for the city

            RestGeoDto restGeoDto = amedeusRestService.geoDataRequest(arrivalCityName);

            // Create the customer dto

            customer = Customer.builder()
                    .firstname(customer.getFirstname())
                    .lastname(customer.getLastname())
                    .pnr(customer.getPnr())
                    .departureCityName("")
                    .arrivalCityName("")
                    .arrivalCitylatitude(restGeoDto.getGeoCode().getLatitude())
                    .arrivalCitylongitude(restGeoDto.getGeoCode().getLongitude())
                    .build();

            customer = customerDao.save(customer);
        }

        return mapper.convertToDto(customer);
    }

    private boolean isCityInService(String cityName) {
        return AppConfig.SERVICE_CITIES.contains(cityName);
    }
}
