import { useState } from "react";

import Grid from "@mui/material/Grid";

import * as React from "react";
import { Box, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import MainPage from "../components/MainPageComponent";


import "../static/style/main.css";
import "../static/style/reservationPage.css";
import "../index.css";
import CreateProfileDialog from "../components/ProfileComponent";

import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../static/style/main.css";

import CategoriesImaged from "../components/CategoriesImaged";
import WeatherCard from "../components/WeatherCard";

import useTicketStore from "../store/TicketStore";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function ActivitiesPage() {
  const {
    pnr,
    isReturnFlight,
    flightNumber,
    ticketNumber,
    boardingPassQrCode,
    seatNumber,
    arrivalDate,
    arrivalTime,
    arrivalCityName,
    arrivalCountryCode,
    departureDate,
    boardingTime,
    departureTime,
    departureCityName,
    departureCountryCode,
    checkInInfo,
    namePrefix,
    firstName,
    lastName,
    isLogged,
  } = useTicketStore((state) => ({
    pnr: state.pnr,
    isReturnFlight: state.isReturnFlight,
    flightNumber: state.flightNumber,
    ticketNumber: state.ticketNumber,
    boardingPassQrCode: state.boardingPassQrCode,
    seatNumber: state.seatNumber,
    arrivalDate: state.arrivalDate,
    arrivalTime: state.arrivalTime,
    arrivalCityName: state.arrivalCityName,
    arrivalCountryCode: state.arrivalCountryCode,
    departureDate: state.departureDate,
    boardingTime: state.boardingTime,
    departureTime: state.departureTime,
    departureCityName: state.departureCityName,
    departureCountryCode: state.departureCountryCode,
    checkInInfo: state.checkInInfo,
    namePrefix: state.namePrefix,
    firstName: state.firstName,
    lastName: state.lastName,
    isLogged: state.isLogged,
  }));

  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!isLogged) {
      alert("Session expired. Please enter your reservation code again.");
      navigate("/");
    } else {
      fetchAndSetData();
    }
  }, []);

  const ticketData = {
    pnr,
    isReturnFlight,
    flightNumber,
    ticketNumber,
    boardingPassQrCode,
    seatNumber,
    arrivalDate,
    arrivalTime,
    arrivalCityName,
    arrivalCountryCode,
    departureDate,
    boardingTime,
    departureTime,
    departureCityName,
    departureCountryCode,
    checkInInfo,
    namePrefix,
    firstName,
    lastName,
    isLogged,
  };

  const [geoData, setGeoData] = useState({
    name: "",
    country: "",
    latitude: "",
    longitude: "",
  });

  const [weatherData, setWeatherData] = useState([
    {
      mainDescription: "",
      description: "",
      iconLink: "",
      temperature: "",
      feelsLikeTemperature: "",
      dayAndHour: "",
    },
  ]);

  const [activityData, setActivityData] = useState([]);
  const [placeData, setPlaceData] = useState([]);

  const fetchAndSetData = async () => {
    let result = await fetchAllInfo();
    if (result && result.geoData && result.weatherData && result.activityData) {
      setGeoData({ ...result.geoData });
      setWeatherData({ ...result.weatherData });
      setActivityData(result.activityData);
      setPlaceData(result.placeData);
    }
  };

  async function fetchAllInfo() {
    let response = await fetch(
      "http://localhost:8080/api/v1/geodata/" + arrivalCityName
    ).catch((e) => alert("City is not valid"));

    if (!response.ok) {
      alert("There is no city with given name");
      return;
    }

    let json = await response.json();

    let result = { geoData: json };

    response = await fetch(
      `http://localhost:8080/api/v1/weather/${result.geoData.latitude}/${result.geoData.longitude}`
    ).catch((e) => alert("Latitude or Longitude is not valid"));

    if (!response.ok) {
      alert("Latitude or Longitude is not valid");
      return;
    }

    json = await response.json();

    result = {
      ...result,
      weatherData: json,
    };

    response = await fetch(
      `http://localhost:8080/api/v1/activities/${result.geoData.latitude}/${result.geoData.longitude}`
    ).catch((e) => alert("Activities error"));

    if (!response.ok) {
      alert("Activities error");
      return;
    }

    json = await response.json();

    console.log(json);
    result = {
      ...result,
      activityData: json,
    };

    response = await fetch(
      `http://localhost:8080/api/v1/places/${result.geoData.latitude}/${result.geoData.longitude}`
    ).catch((e) => alert("Places error"));

    if (!response.ok) {
      alert("Places error");
      return;
    }

    json = await response.json();

    console.log(json);
    result = {
      ...result,
      placeData: json,
    };

    setIsLoaded((prev) => !prev);

    
    return result;
  }

  let pageContent = (

    <Box>
      <Parallax pages={4} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container direction="column" mt={0}>
            <Grid
              item
              ml={0}
              p={3}
              spacing={0}
              style={{ textAlign: "left" }}
            >
              <Grid
                container
                direction="column"
                sx={{ p: { xs: 0, md: 0, lg: 3, xl: 9 } }}
              >
                <div style={{ padding: 2 }}>
                  <Grid container spacing={2} alignItems="center" >
                    <Grid item xs={6} md={8} alignItems="center">
                      <Typography sx={{ fontFamily: 'monospace', fontWeight: 700}} className="inline-block align-middle text-neutral-200" variant="h2" gutterBottom component="div">
                        Welcome {ticketData.isReturnFlight && 'back'} to {geoData.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <CreateProfileDialog t={ticketData} />
                    </Grid>
                  </Grid>
                </div>
              </Grid>
			  <Grid
				container
				display="flex"
				width="100%"
				alignItems="center"
				justifyContent="center"
				mt={8}
				>
              <div style={{ padding: 2}} className="mb-24">
                  <Grid>
                    <WeatherCard geo={geoData} weather={weatherData} />
                  </Grid>
                </div>
					<ArrowDownwardOutlinedIcon
					className="svgIcons"
					style={{ color: "#fdfdfd" }}
					/>
				</Grid>
            </Grid>
			
          </Grid>
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            component="div"
            color="#fdfdfd"
            sx={{ textShadow: "3px 3px 4px black" }}
          >
            Take that step, <br />
            widen your world.
          </Typography>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          style={{ backgroundColor: "#2d4191" }}
        />

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Grid container direction="column" mt={5} p={7}>
            <Typography
              variant="h2"
              color="#fdfdfd"
              sx={{ textShadow: "0px 2px 4px black" }}
              className="underline decoration-black decoration-4"
            >
              Activities
            </Typography>
            <Grid
              item
              xs={7}
              mt={5}
              p={4}
              spacing={2}
              justifyContent="center"
              alignItems="center"
              boxShadow="3"
              backgroundColor={alpha("#E5E4E2", 0.9)}
              borderRadius="6px"
              style={{ textAlign: "center", width: "100%" }}
            >
              <MainPage activities={activityData} />
            </Grid>
          </Grid>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={2}
          style={{ backgroundColor: "#2d4191" }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            width: "100%",
          }}
        >
          <Grid container direction="column" mt={10}>
            <Typography
              ml={4}
              variant="h2"
              color="#fdfdfd"
              sx={{ textShadow: "0px 2px 4px black" }}
              className="underline decoration-black decoration-4"
            >
              Places
            </Typography>
            <Grid item p={3} sx={{ width: "100%" }}>
              <Grid
                container
                p={4}
                borderRadius="6px"
                boxShadow="3"
                backgroundColor={alpha("#E5E4E2", 0.95)}
                style={{
                  textAlign: "left",
                  display: "flex",
                  mX: "auto",
                  width: "100%",
                }}
              >
                <CategoriesImaged titleName="Food" places={placeData} />
                <CategoriesImaged titleName="Sights" places={placeData} />
                <CategoriesImaged titleName="Shopping" places={placeData} />
                <CategoriesImaged titleName="Nightlife" places={placeData} />
              </Grid>
            </Grid>
          </Grid>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );

  const loadingPage = (
    <Box
          height="100vh"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Grid
              item
              ml={0}
              mt={0}
              p={3}
              spacing={0}
              style={{ textAlign: "center" }}
            >
              <Grid
                container
                direction="column"
                sx={{ p: { xs: 0, md: 0, lg: 6, xl: 12 } }}
              >
                <Grid item>
                  <CircularProgress color="error" />
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    color="#fdfdfd"
                    sx={{ textShadow: "3px 3px 4px black" }}
                  >
                    Boosting your journey...
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
  )

  return <>{isLoaded ? pageContent : loadingPage}</>;
}