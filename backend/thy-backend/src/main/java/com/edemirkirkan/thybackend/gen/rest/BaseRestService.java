package com.edemirkirkan.thybackend.gen.rest;

import org.apache.http.client.utils.URIBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.net.URISyntaxException;

@Service
public class BaseRestService {
    public HttpEntity<Void> amadeusHttpEntity = setAmadeusAuthenticationHeaders();
    public HttpEntity<Void> thyHttpEntity = setThyAuthenticationHeaders();


    public String buildUrlWithParams(URIBuilder builder, String... params) {
        for (int i = 0, n = params.length - 1; i < n; i += 2) {
            builder.addParameter(params[i], params[i + 1]);
        }

        return validateAndReturnUrl(builder);
    }

    public String buildUrl(URIBuilder builder) {
        return validateAndReturnUrl(builder);
    }

    public URIBuilder getURIBuilder(String host,String path) {
        return new URIBuilder()
                .setScheme(RestConstant.SCHEME)
                .setHost(host)
                .setPath(path);
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

    private RestAccessTokenDto tokenRequest()  {
        URIBuilder builder = getURIBuilder(RestConstant.AMADEUS_HOST, RestConstant.TOKEN_PATH);
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

    private HttpEntity<Void> setThyAuthenticationHeaders() {
        HttpHeaders headers = new HttpHeaders();

        headers.set("apikey", RestConstant.THY_API_KEY);
        headers.set("apisecret", RestConstant.THY_API_SECRET);

        return new HttpEntity<>(headers);
    }

    private HttpEntity<Void> setAmadeusAuthenticationHeaders() {
        HttpHeaders headers = new HttpHeaders();
        String token = getAccessToken();
        headers.setBearerAuth(token);
        return new HttpEntity<>(headers);
    }
}
