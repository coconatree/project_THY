package com.edemirkirkan.thybackend.cst.service;

import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class CustomerFactory {
    private final CustomerData customerData;


    public CustomerDto getCustomer(String pnr, LinkedHashMap data) {
        Pair<String, String> arrivalCityCode = (Pair<String, String>)
                any(customerData.arrCityCode.toArray());
        Pair<String, String> departureCityCode = (Pair<String, String>)
                any(customerData.depCityCode.toArray());
        Pair<String, String> name = (Pair<String, String>) any(customerData.name.toArray());
        return CustomerDto.builder()
                .pnr(pnr).isReturnFlight((Boolean) any(customerData.isReturnFlight))
                .flightNumber(RandomStringUtils.randomNumeric(4))
                .ticketNumber(RandomStringUtils.randomNumeric(13))
                .boardingPassQrCode(RandomStringUtils.randomAlphanumeric(750))
                .seatNumber(generateSeat())
                .arrivalDate((String) retrieveFieldByKey(data,"ArrivalDate"))
                .arrivalTime((String) retrieveFieldByKey(data,"ArrivalTime"))
                .arrivalCityName(arrivalCityCode.getFirst())
                .arrivalCountryCode(arrivalCityCode.getSecond())
                .departureDate((String) retrieveFieldByKey(data,"DepartureDate"))
                .boardingTime((String) retrieveFieldByKey(data,"BoardingTime"))
                .departureTime((String) retrieveFieldByKey(data,"DepartureTime"))
                .departureCityName(departureCityCode.getFirst())
                .departureCountryCode(departureCityCode.getSecond())
                .checkInInfo(generateCheckInInfo(data))
                .namePrefix(name.getFirst())
                .firstName((name.getSecond()))
                .lastName((String) any(customerData.lastName)).build();
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


    private Object any(Object[] list) {
        return list[new Random().nextInt(list.length)];
    }

    private String generateSeat() {
        String[] row = new String[] {"A", "B", "C", "D", "E", "G", "J", "K"};
        Integer col = new Random().nextInt(53) + 1;
        return col + (String) any(row);
    }

    private String generateCheckInInfo(LinkedHashMap data) {
        int ran = new Random().nextInt(10);
        return ran < 3 ? "Has not checked in" : "Checked in at " + retrieveFieldByKey(data, "CheckinDate")
                + ", " + retrieveFieldByKey(data, "CheckinTime");
    }
}
