package com.edemirkirkan.thybackend.cst.service;

import com.edemirkirkan.thybackend.gen.rest.BaseRestService;
import com.edemirkirkan.thybackend.gen.rest.RestConstant;
import org.apache.http.client.utils.URIBuilder;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.LinkedHashMap;

@Service
public class CustomerRestService extends BaseRestService {
    public LinkedHashMap getCustomerBoardingPassData(String pnr) {
        URIBuilder builder = getURIBuilder(RestConstant.THY_HOST, RestConstant.THY_BP_PATH);
        String url = buildUrlWithParams(builder, "pnr", pnr);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<LinkedHashMap> responseEntity = restTemplate.exchange(url, HttpMethod.GET,
                thyHttpEntity, LinkedHashMap.class);

        if (responseEntity.getStatusCodeValue() != 200) {
            throw new RuntimeException("Bad geo data request");
        }

        return responseEntity.getBody();
    }
}
