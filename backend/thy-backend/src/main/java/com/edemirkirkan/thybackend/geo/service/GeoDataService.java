package com.edemirkirkan.thybackend.geo.service;

import com.edemirkirkan.thybackend.geo.converter.GeoDataMapper;
import com.edemirkirkan.thybackend.geo.dao.GeoDataDao;
import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.geo.entity.GeoData;
import com.edemirkirkan.thybackend.rst.dto.RestGeoDataDto;
import com.edemirkirkan.thybackend.rst.service.RestService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.beans.Transient;

@Service
@RequiredArgsConstructor
public class GeoDataService {

    private final GeoDataDao  geoDataDao;
    private final RestService restService;

    private final GeoDataMapper mapper;

    public GeoDataDto retrieveGeoData(String cityName) {

        GeoData geoData = checkGeoDataIfExists(cityName);

        if (geoData == null) {
            RestGeoDataDto restGeoDataDto = restService.geoDataRequest(cityName);
            geoData = mapper.convertToEntity(restGeoDataDto);
            geoData = geoDataDao.save(geoData);
        }

        return mapper.convertToDto(geoData);
    }

    private GeoData checkGeoDataIfExists(String cityName) {
        return geoDataDao.findByName(cityName);
    }
}
