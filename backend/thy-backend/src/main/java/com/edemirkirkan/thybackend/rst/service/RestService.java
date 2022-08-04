package com.edemirkirkan.thybackend.rst.service;

import com.edemirkirkan.thybackend.act.dto.RestActivityListDto;
import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.rst.dto.RestAccessTokenDto;
import com.edemirkirkan.thybackend.geo.dto.RestGeoDataDto;
import com.edemirkirkan.thybackend.rst.dto.RestConstant;
import com.edemirkirkan.thybackend.wtr.dto.RestWeatherDto;
import org.apache.http.client.utils.URIBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.net.URISyntaxException;
import java.util.List;

@Service
public class RestService {
    HttpEntity<Void> httpEntity = setAuthenticationHeaders();

    public RestWeatherDto weatherRequest(String latitude, String longitude) {
        URIBuilder builder = getURIBuilder(RestConstant.WEATHER_HOST, RestConstant.WEATHER_PATH);
        String url = buildUrlWithParams(builder,
                "lat", latitude,
                "lon", longitude,
                "appid", RestConstant.WEATHER_APP_ID,
                "units", RestConstant.WEATHER_UNIT,
                "lang", RestConstant.WEATHER_LANG);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<RestWeatherDto> responseEntity = restTemplate.getForEntity(url, RestWeatherDto.class);

        if (responseEntity.getStatusCodeValue() != 200) {
            throw new RuntimeException("Bad activity request");
        }

        return responseEntity.getBody();
    }
    public RestActivityListDto activityRequest(String latitude, String longitude) {
        URIBuilder builder = getURIBuilder(RestConstant.HOST, RestConstant.ACITIVITY_PATH);
        String url = buildUrlWithParams(builder,
                "longitude", longitude,
                "latitude", latitude,
                "radius", RestConstant.ACTIVITY_RADIUS);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<RestActivityListDto> responseEntity = restTemplate.
                exchange(url, HttpMethod.GET, httpEntity, RestActivityListDto.class);

        if (responseEntity.getStatusCodeValue() != 200) {
            throw new RuntimeException("Bad activity request");
        }

        return responseEntity.getBody();
    }

    public RestGeoDataDto geoDataRequest(String cityName) {
        URIBuilder builder = getURIBuilder(RestConstant.WEATHER_HOST,
                 RestConstant.GEO_DATA_PATH);

        String url = buildUrlWithParams(builder, "q", cityName, "limit", "1",
                "appid", RestConstant.WEATHER_APP_ID);

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


    private RestAccessTokenDto tokenRequest()  {
        URIBuilder builder = getURIBuilder(RestConstant.HOST, RestConstant.TOKEN_PATH);
        String url = buildUrl(builder);


        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(buildPostMap(), headers);
        ResponseEntity<RestAccessTokenDto> responseEntity = restTemplate.
                postForEntity(url, request, RestAccessTokenDto.class);

        if (responseEntity.getStatusCodeValue() != 200) {
            throw new RuntimeException("Bad token request");
        }
        return responseEntity.getBody();
    }

    private URIBuilder getURIBuilder(String host,String path) {
        return new URIBuilder()
                .setScheme(RestConstant.SCHEME)
                .setHost(host)
                .setPath(path);
    }

    private String buildUrlWithParams(URIBuilder builder, String... params) {
        for (int i = 0, n = params.length - 1; i < n; i += 2) {
            builder.addParameter(params[i], params[i + 1]);
        }

        return validateAndReturnUrl(builder);
    }

    private String buildUrl(URIBuilder builder) {
        return validateAndReturnUrl(builder);
    }

    private String validateAndReturnUrl(URIBuilder builder) {
        String url;
        try {
            url = builder.build().toString();
        } catch (URISyntaxException ex) {
            throw new RuntimeException("Wrong URL syntax");
        }
        return url;
    }

    private MultiValueMap<String, String> buildPostMap() {
        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("grant_type", RestConstant.GRANT_TYPE);
        map.add("client_id", RestConstant.CLIENT_ID);
        map.add("client_secret", RestConstant.CLIENT_SECRET);
        return map;
    }

    private String getAccessToken() {
        return tokenRequest().getAccess_token();
    }

    private HttpEntity<Void> setAuthenticationHeaders() {
        HttpHeaders headers = new HttpHeaders();
        String token = getAccessToken();
        headers.setBearerAuth(token);
        return new HttpEntity<>(headers);
    }

    public CustomerDto customerRequest(String reservationId) {

        // Reservation -> THY API

        // Amedeus API

        RestGeoDataDto geoData = this.geoDataRequest("PARIS");


        return CustomerDto.builder()
                .pnr("Res-453193191-13123")
                .firstname("Emre")
                .lastname("Caniklioglu")
                .arrivalCityLatitude(geoData.getLat())
                .arrivalCityLongitude(geoData.getLon())
                .build();
    }
}
