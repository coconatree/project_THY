package com.edemirkirkan.thybackend.cst.converter;

import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-03T23:38:56+0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2 (Oracle Corporation)"
)
@Component
public class CustomerMapperImpl extends CustomerMapper {

    @Override
    public Customer convertToEntity(CustomerDto customerDto) {
        if ( customerDto == null ) {
            return null;
        }

        Customer.CustomerBuilder customer = Customer.builder();

        customer.pnr( customerDto.getPnr() );
        customer.firstname( customerDto.getFirstname() );
        customer.lastname( customerDto.getLastname() );
        customer.departureCityName( customerDto.getDepartureCityName() );
        customer.arrivalCityName( customerDto.getArrivalCityName() );
        customer.arrivalCitylatitude( customerDto.getArrivalCitylatitude() );
        customer.arrivalCitylongitude( customerDto.getArrivalCitylongitude() );

        return customer.build();
    }

    @Override
    public CustomerDto convertToDto(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerDto.CustomerDtoBuilder customerDto = CustomerDto.builder();

        customerDto.pnr( customer.getPnr() );
        customerDto.firstname( customer.getFirstname() );
        customerDto.lastname( customer.getLastname() );
        customerDto.departureCityName( customer.getDepartureCityName() );
        customerDto.arrivalCityName( customer.getArrivalCityName() );
        customerDto.arrivalCitylatitude( customer.getArrivalCitylatitude() );
        customerDto.arrivalCitylongitude( customer.getArrivalCitylongitude() );

        return customerDto.build();
    }
}
