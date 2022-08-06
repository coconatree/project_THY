package com.edemirkirkan.thybackend.cst.converter;

import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-08-06T17:09:09+0300",
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

        customer.setPnr( customerDto.getPnr() );
        customer.setIsReturnFlight( customerDto.getIsReturnFlight() );
        customer.setFlightNumber( customerDto.getFlightNumber() );
        customer.setTicketNumber( customerDto.getTicketNumber() );
        customer.setBoardingPassQrCode( customerDto.getBoardingPassQrCode() );
        customer.setSeatNumber( customerDto.getSeatNumber() );
        customer.setArrivalDate( customerDto.getArrivalDate() );
        customer.setArrivalTime( customerDto.getArrivalTime() );
        customer.setArrivalCityName( customerDto.getArrivalCityName() );
        customer.setArrivalCountryCode( customerDto.getArrivalCountryCode() );
        customer.setDepartureDate( customerDto.getDepartureDate() );
        customer.setBoardingTime( customerDto.getBoardingTime() );
        customer.setDepartureTime( customerDto.getDepartureTime() );
        customer.setDepartureCityName( customerDto.getDepartureCityName() );
        customer.setDepartureCountryCode( customerDto.getDepartureCountryCode() );
        customer.setCheckInInfo( customerDto.getCheckInInfo() );
        customer.setNamePrefix( customerDto.getNamePrefix() );
        customer.setFirstName( customerDto.getFirstName() );
        customer.setLastName( customerDto.getLastName() );

        return customer;
    }

    @Override
    public CustomerDto convertToDto(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerDto.CustomerDtoBuilder customerDto = CustomerDto.builder();

        customerDto.pnr( customer.getPnr() );
        customerDto.isReturnFlight( customer.getIsReturnFlight() );
        customerDto.flightNumber( customer.getFlightNumber() );
        customerDto.ticketNumber( customer.getTicketNumber() );
        customerDto.boardingPassQrCode( customer.getBoardingPassQrCode() );
        customerDto.seatNumber( customer.getSeatNumber() );
        customerDto.arrivalDate( customer.getArrivalDate() );
        customerDto.arrivalTime( customer.getArrivalTime() );
        customerDto.arrivalCityName( customer.getArrivalCityName() );
        customerDto.arrivalCountryCode( customer.getArrivalCountryCode() );
        customerDto.departureDate( customer.getDepartureDate() );
        customerDto.boardingTime( customer.getBoardingTime() );
        customerDto.departureTime( customer.getDepartureTime() );
        customerDto.departureCityName( customer.getDepartureCityName() );
        customerDto.departureCountryCode( customer.getDepartureCountryCode() );
        customerDto.checkInInfo( customer.getCheckInInfo() );
        customerDto.namePrefix( customer.getNamePrefix() );
        customerDto.firstName( customer.getFirstName() );
        customerDto.lastName( customer.getLastName() );

        return customerDto.build();
    }
}
