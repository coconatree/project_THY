package com.edemirkirkan.thybackend.cst.service;

import com.edemirkirkan.thybackend.cst.converter.CustomerMapper;
import com.edemirkirkan.thybackend.cst.dao.CustomerDao;
import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRestService restService;
    private final CustomerFactory customerFactory;
    private final CustomerDao customerDao;
    private final CustomerMapper customerMapper;

    public CustomerDto retieveCustomerByReservationId(String pnr)  {
        if (!StringUtils.isAlphanumeric(pnr)
                || !isAllUpperCase(pnr)
                || pnr.length() != 7) {
            throw new RuntimeException("Invalid PNR number!");
        }
        Customer customer = customerDao.findByPnr(pnr);

        if (customer == null) {
            LinkedHashMap data = restService.getCustomerBoardingPassData(pnr);
            CustomerDto customerDto = customerFactory.getCustomer(pnr, data);
            customer = customerMapper.convertToEntity(customerDto);
            customer = customerDao.save(customer);
        }

        return customerMapper.convertToDto(customer);
    }

    private boolean isAllUpperCase(String pnr) {
        for (int i = 0, n = pnr.length(); i < n; i++) {
            char ch = pnr.charAt(i);
            if (Character.isLetter(ch) && Character.isLowerCase(ch)) {
                return false;
            }
        }
        return true;
    }



}
