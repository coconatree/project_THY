package com.edemirkirkan.thybackend.geo.service;

import com.edemirkirkan.thybackend.geo.converter.GeoDataMapper;
import com.edemirkirkan.thybackend.geo.dao.GeoDataDao;
import com.edemirkirkan.thybackend.geo.dto.GeoDataDto;
import com.edemirkirkan.thybackend.geo.entity.GeoData;
import com.edemirkirkan.thybackend.geo.dto.RestGeoDataDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GeoDataService {

    private final GeoDataDao  geoDataDao;
    private final GeoDataRestService restService;

    private final GeoDataMapper mapper;

    public GeoDataDto retrieveGeoData(String cityName) {

        GeoData geoData = geoDataDao.findByName(cityName);

        if (geoData == null) {
            RestGeoDataDto restGeoDto = restService.geoDataRequest(cityName);
            geoData = mapper.convertToEntity(restGeoDto);
            geoData = geoDataDao.save(geoData);
        }

        return mapper.convertToDto(geoData);
    }
}
