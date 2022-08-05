package com.edemirkirkan.thybackend.cst.service;

import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Stack;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRestService restService;

    public CustomerDto retieveCustomerByReservationId(String pnr)  {
        LinkedHashMap data = restService.getCustomerBoardingPassData(pnr);
        // TODO build customer by using retriveFieldByKey on each field
        CustomerDto customerDto = CustomerDto.builder().build();
        return customerDto;
    }

    private Object retrieveFieldByKey(LinkedHashMap data, String key) {
        Stack<LinkedHashMap> stack = new Stack<>();
        stack.push(data);

        while (!stack.empty()) {
            LinkedHashMap top = stack.pop();
            if (top.containsKey(key)) {
                return top.get(key);
            }
            for (var k : top.keySet()) {
                var newData = top.get(k);
                if (!(newData instanceof LinkedHashMap)) {
                    if (k.equals(key))
                        return newData;
                    else
                        continue;
                }
                stack.push((LinkedHashMap) newData);
            }
        }

        return null;
    }

}
