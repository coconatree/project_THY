package com.edemirkirkan.thybackend.cst.converter;

import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.cst.entity.Customer;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public abstract class CustomerMapper {
    public abstract Customer convertToEntity(CustomerDto customerDto);
    public abstract CustomerDto convertToDto(Customer customer);
}
