package com.edemirkirkan.thybackend.cst.converter;

import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-01T02:14:42+0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2 (Oracle Corporation)"
)
@Component
public class CustomerMapperImpl extends CustomerMapper {

    @Override
    public Customer convertToEntity(CustomerDto customerDto) {
        if ( customerDto == null ) {
            return null;
        }

        Customer customer = new Customer();

        customer.setReservationId( customerDto.getReservationId() );
        customer.setFirstname( customerDto.getFirstname() );
        customer.setLastname( customerDto.getLastname() );
        customer.setLatitude( customerDto.getLatitude() );
        customer.setLongitude( customerDto.getLongitude() );

        return customer;
    }

    @Override
    public CustomerDto convertToDto(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerDto.CustomerDtoBuilder customerDto = CustomerDto.builder();

        customerDto.reservationId( customer.getReservationId() );
        customerDto.firstname( customer.getFirstname() );
        customerDto.lastname( customer.getLastname() );
        customerDto.latitude( customer.getLatitude() );
        customerDto.longitude( customer.getLongitude() );

        return customerDto.build();
    }
}
