package com.edemirkirkan.thybackend.rst.service;

import com.edemirkirkan.thybackend.act.dto.RestActivityListDto;
import com.edemirkirkan.thybackend.cst.dto.CustomerDto;
import com.edemirkirkan.thybackend.rst.dto.RestAccessTokenDto;
import com.edemirkirkan.thybackend.geo.rst.RestGeoDataDto;
import com.edemirkirkan.thybackend.geo.rst.RestGeoDto;
import com.edemirkirkan.thybackend.rst.dto.RestConstant;
import org.apache.http.client.utils.URIBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.net.URISyntaxException;

@Service
public class RestService {
    HttpEntity<Void> httpEntity = setAuthenticationHeaders();

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

    public RestGeoDto geoDataRequest(String cityName) {
        URIBuilder builder = getURIBuilder(RestConstant.HOST, RestConstant.CITY_SEARCH_PATH);
        String url = buildUrlWithParams(builder, "keyword", cityName, "max", "10");

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<RestGeoDataDto> responseEntity = restTemplate.
                exchange(url, HttpMethod.GET, httpEntity, RestGeoDataDto.class);
        if (responseEntity.getStatusCodeValue() != 200) {
            throw new RuntimeException("Bad geo data request");
        }

        RestGeoDataDto restGeoDataDto = responseEntity.getBody();

        if (restGeoDataDto == null || restGeoDataDto.getData() == null || restGeoDataDto.getData().size() == 0) {
            throw new RuntimeException("Empty geo data response");
        }

        return restGeoDataDto.getData().get(0);
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
        HttpEntity<Void> httpEntity = new HttpEntity<>(headers);
        return httpEntity;
    }

    public CustomerDto customerRequest(String reservationId) {

        // Reservation -> THY API

        // Amedeus API

        RestGeoDto geoData = this.geoDataRequest("PARIS");

        if (geoData.getType() != null && geoData.getSubtype() != null &&
                (!geoData.getType().equals("location") || !geoData.getSubtype().equals("city"))) {
            throw new RuntimeException("Invalid City Name");
        }

        return CustomerDto.builder()
                .reservationId("Res-453193191-13123")
                .firstname("Emre")
                .lastname("Caniklioglu")
                .latitude(geoData.getGeoCode().getLatitude())
                .longitude(geoData.getGeoCode().getLongitude())
                .build();
    }
}
