package com.edemirkirkan.thybackend.plc.service;

import com.edemirkirkan.thybackend.act.dto.RestActivityListDto;
import com.edemirkirkan.thybackend.gen.rest.BaseRestService;
import com.edemirkirkan.thybackend.gen.rest.RestConstant;
import com.edemirkirkan.thybackend.plc.dto.RestPlaceListDto;
import lombok.extern.java.Log;
import org.apache.http.client.utils.URIBuilder;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.logging.Level;

@Service
@Log
public class RestPlaceService extends BaseRestService {
    public RestPlaceListDto placeRequest(String latitude, String longitude) {
        URIBuilder builder = getURIBuilder(RestConstant.AMADEUS_HOST,
                RestConstant.PLACE_PATH);
        String url = buildUrlWithParams(builder,
                "longitude", longitude,
                "latitude", latitude,
                "radius", "1");

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<RestPlaceListDto> responseEntity = null;
        int i = 10;
        while (i > 0) {
            try {
                responseEntity = restTemplate.exchange(url, HttpMethod.GET,
                        amadeusHttpEntity, RestPlaceListDto.class);
                break;
            } catch (Exception ex) {
                log.log(Level.WARNING, ex.getMessage());
            }
            i--;
        }


        if (responseEntity == null || responseEntity.getStatusCodeValue() != 200) {
            throw new RuntimeException("Bad place request");
        }

        return responseEntity.getBody();
    }
}

