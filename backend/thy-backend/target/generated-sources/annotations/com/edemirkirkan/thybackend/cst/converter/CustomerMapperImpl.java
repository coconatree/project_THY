package com.edemirkirkan.thybackend.cst.converter;

import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-04T10:33:45+0300",
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

        customer.firstname( customerDto.getFirstname() );
        customer.lastname( customerDto.getLastname() );

        return customer.build();
    }

    @Override
    public CustomerDto convertToDto(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerDto.CustomerDtoBuilder customerDto = CustomerDto.builder();

        customerDto.firstname( customer.getFirstname() );
        customerDto.lastname( customer.getLastname() );

        return customerDto.build();
    }
}
