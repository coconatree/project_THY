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

import { ReactComponent as THYLogo } from '../static/vector/THYLogo.svg';
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../static/style/main.css";

import WeatherCard from "../components/WeatherCard";
import PlacePageComponent from "../components/PlacePageComponent";

import useTicketStore from "../store/TicketStore";
import { useEffect } from "react";
import Navbar from "../components/NavBar";
import NavBarProfile from "../components/NavBarProfile";


import { useNavigate } from "react-router-dom";

export default function ActivitiesPage() {
  const {
    pnr,
    isReturnFlight,
    flightNumber,
    ticketNumber,
    seatNumber,
    arrivalDate,
    arrivalTime,
    arrivalCityName,
    arrivalCountryCode,
    arrivalCountryName,
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
    seatNumber: state.seatNumber,
    arrivalDate: state.arrivalDate,
    arrivalTime: state.arrivalTime,
    arrivalCityName: state.arrivalCityName,
    arrivalCountryCode: state.arrivalCountryCode,
    arrivalCountryName: state.arrivalCountryName,
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
    seatNumber,
    arrivalDate,
    arrivalTime,
    arrivalCityName,
    arrivalCountryCode,
    arrivalCountryName,
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
    let error = "Please check your reservation code and try again.";
    let response = await fetch(
      "http://localhost:8080/api/v1/geodata/" + arrivalCityName
    ).catch(() => {alert(error);   navigate("/"); });

    if (!response.ok) {
      alert(error);
      navigate("/");
      return;
    }

    let json = await response.json();

    let result = { geoData: json };

    response = await fetch(
      `http://localhost:8080/api/v1/weather/${result.geoData.latitude}/${result.geoData.longitude}`
    ).catch(() => {alert(error);   navigate("/"); });

    if (!response.ok) {
      alert(error);
      navigate("/");
      return;
    }

    json = await response.json();

    result = {
      ...result,
      weatherData: json,
    };

    response = await fetch(
      `http://localhost:8080/api/v1/activities/${result.geoData.latitude}/${result.geoData.longitude}`
    ).catch(() => {alert(error);   navigate("/"); });

    if (!response.ok) {
      alert(error);
      navigate("/");
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
    ).catch(() => {alert(error);   navigate("/"); });

    if (!response.ok) {
      alert(error);
      navigate("/");
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
    <div className='h-full w-full'>
        <NavBarProfile ticket={ticketData}/>
        <div className="bacground_image">
    <Box>
      <Parallax pages={7} style={{ top: "0", left: "0" }}>
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
                <div class="flex items-center justify-center w-full" style={{ padding: 2 }}>
                  <Grid container spacing={2} alignItems="center" >
                    <Grid item xs={6} md={8} alignItems="center">
                      <Typography   variant="h2" className="inline-block align-middle" gutterBottom component="div" color="#fdfdfd" sx={{ textShadow: "3px 3px 4px black" }}>
                        Welcome {ticketData.isReturnFlight && 'back'} to {geoData.name}
                      </Typography>
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
                    <WeatherCard geo={geoData} weather={weatherData} t={ticketData} />
                  </Grid>
                </div>
				</Grid>
        <div class="flex items-center justify-center w-full">
		    <ArrowDownwardOutlinedIcon
					className="svgIcons"
					style={{ color: "#fdfdfd" }}
					/>
        </div>
        	
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
            Take that step, <br/>
            widen your world.
          </Typography>
        </ParallaxLayer>

    

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
            >
              Activities and Tours
            </Typography>
            <Grid
              item
              sx={{
                boxShadow: 2,
                border: 2,
                borderColor: '#b6291e'
                }}
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
         "It's not the destination, it's the journey.”<br/>
         ― Ralph Waldo Emerson
          </Typography>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
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
            >
              Points of Interests and Attractions
            </Typography>
            <Grid
              item
              sx={{
                boxShadow: 2,
                border: 2,
                borderColor: '#b6291e'
                }}
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
              <PlacePageComponent places={placeData} />
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
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
            sx={{ textAlign: "center", textShadow: "3px 3px 4px black" }}
          >
         Fly with us.
         <THYLogo/>
          </Typography>
      
        </ParallaxLayer>
        
      </Parallax>
    </Box>
    </div>
    </div>
  );

  let loadingContent = (
    <div className='h-full w-full'>
        <Navbar/>
    <div className="bacground_image">
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
      </div>
      </div>
  );
  return <>{isLoaded ? pageContent : loadingContent}</>;
}