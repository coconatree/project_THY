package com.edemirkirkan.thybackend.cst.service;


import com.edemirkirkan.thybackend.cst.converter.CustomerMapper;
import com.edemirkirkan.thybackend.cst.dao.CustomerDao;
import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import com.edemirkirkan.thybackend.rst.service.RestService;
import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final RestService restService;
    private final CustomerMapper mapper;
    private final CustomerDao customerDao;

    public CustomerDto retieveCustomerByReservationId(String reservationId) {

        Customer customer = customerDao.findByReservationId(reservationId);

        if (customer == null) {
            CustomerDto customerDto = restService.customerRequest(reservationId);
            customer = mapper.convertToEntity(customerDto);
            customer = customerDao.save(customer);
        }

        return mapper.convertToDto(customer);
    }
}
