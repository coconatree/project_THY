package com.edemirkirkan.thybackend.act.service;

import com.edemirkirkan.thybackend.act.dto.RestActivityListDto;
import com.edemirkirkan.thybackend.gen.rest.BaseRestService;
import com.edemirkirkan.thybackend.gen.rest.RestConstant;
import org.apache.http.client.utils.URIBuilder;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ActivityRestService extends BaseRestService {
    public RestActivityListDto activityRequest(String latitude, String longitude) {
        URIBuilder builder = getURIBuilder(RestConstant.AMADEUS_HOST, RestConstant.ACITIVITY_PATH);
        String url = buildUrlWithParams(builder,
                "longitude", longitude,
                "latitude", latitude,
                "radius", RestConstant.ACTIVITY_RADIUS);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<RestActivityListDto> responseEntity = restTemplate.exchange(
                url, HttpMethod.GET, amadeusHttpEntity, RestActivityListDto.class);

        if (responseEntity.getStatusCodeValue() != 200) {
            throw new RuntimeException("Bad activity request");
        }

        return responseEntity.getBody();
    }
}
