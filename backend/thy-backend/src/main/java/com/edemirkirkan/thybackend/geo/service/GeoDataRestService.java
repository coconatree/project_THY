package com.edemirkirkan.thybackend.geo.service;

import com.edemirkirkan.thybackend.gen.rest.BaseRestService;
import com.edemirkirkan.thybackend.gen.rest.RestConstant;
import com.edemirkirkan.thybackend.geo.dto.RestGeoDataDto;
import org.apache.http.client.utils.URIBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GeoDataRestService extends BaseRestService {
    public RestGeoDataDto geoDataRequest(String cityName) {
        URIBuilder builder = getURIBuilder(RestConstant.WEATHER_HOST,
                RestConstant.GEO_DATA_PATH);

        String url = buildUrlWithParams(builder, "q", cityName,
                "limit", "1", "appid", RestConstant.WEATHER_APP_ID);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<RestGeoDataDto[]> responseEntity = restTemplate.
                getForEntity(url, RestGeoDataDto[].class);
        if (responseEntity.getStatusCodeValue() != 200) {
            throw new RuntimeException("Bad geo data request");
        }


        if ( responseEntity.getBody() == null ||  responseEntity.getBody().length == 0) {
            throw new RuntimeException("Empty or null geo data response");
        }

        return responseEntity.getBody()[0];
    }

}
