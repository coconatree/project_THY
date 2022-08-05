package com.edemirkirkan.thybackend.wtr.service;

import com.edemirkirkan.thybackend.gen.rest.BaseRestService;
import com.edemirkirkan.thybackend.gen.rest.RestConstant;
import com.edemirkirkan.thybackend.wtr.dto.RestWeatherDto;
import org.apache.http.client.utils.URIBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherRestService extends BaseRestService {

    public RestWeatherDto weatherRequest(String latitude, String longitude) {
        URIBuilder builder = getURIBuilder(RestConstant.WEATHER_HOST, RestConstant.WEATHER_PATH);
        String url = buildUrlWithParams(builder,
                "lat", latitude,
                "lon", longitude,
                "appid", RestConstant.WEATHER_APP_ID,
                "units", RestConstant.WEATHER_UNIT);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<RestWeatherDto> responseEntity = restTemplate.getForEntity(url, RestWeatherDto.class);

        if (responseEntity.getStatusCodeValue() != 200) {
            throw new RuntimeException("Bad activity request");
        }

        return responseEntity.getBody();
    }
}
