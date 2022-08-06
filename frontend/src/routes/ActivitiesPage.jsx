
import {useState} from "react";

import Grid from '@mui/material/Grid';

import * as React from 'react';
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import MainPage from "../components/MainPageComponent";


import TicketInfoTest from "../components/TicketInfoTest"

import "../static/style/main.css"
import "../index.css"

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

    const {arrivalCityName, isLogged} = useTicketStore((state) => ({
      arrivalCityName: state.arrivalCityName,
      isLogged: state.isLogged
    }));

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const navigate = useNavigate();

    useEffect(() => {
      if (!isLogged) {
        alert("You need to login !!!")
        navigate("/");
      }
      else {
        fetchAndSetData()
      }
    }, [])

    
    const [geoData, setGeoData] = useState({
      name: "",
      country: "",
      latitude: "",
      longitude: "",
    })

    const [weatherData, setWeatherData] = useState({
      mainDescription: "",
		  description: "",
		  iconLink: "",
		  temperature: "",
		  feelsLikeTemperature: "",
		  dayAndHour: "",
    })

    const [activityData, setActivityData] = useState([]);

    const fetchAndSetData = async () => {

    let result = await fetchAllInfo()
      if(result && result.geoData && result.weatherData && result.activityData) {
          setGeoData( {...result.geoData})
          setWeatherData({...result.weatherData})
          setActivityData(result.activityData)
      }
    };

    async function fetchAllInfo() {
        
    let response = await fetch("http://localhost:8080/api/v1/geodata/" + arrivalCityName)
    .catch(e => alert("City is not valid"))

    console.log(response)
      
    if (!response.ok) {
        alert("There is no city with given name")
        return
    }

    let json = await response.json()

    let result = {geoData:json};

    response = await fetch(`http://localhost:8080/api/v1/weather/${result.geoData.latitude}/${result.geoData.longitude}`)
        .catch(e => alert("Latitude or Longitude is not valid"))

    if (!response.ok) {
        alert("Latitude or Longitude is not valid")
        return
    }

    json = await response.json()

    result = {
      ...result, weatherData:json
    }

    console.log(result.geoData)

    response = await fetch(`http://localhost:8080/api/v1/activities/${result.geoData.latitude}/${result.geoData.longitude}`)
        .catch(e => alert("Activities error"))

    
    if (!response.ok) {
        alert("Activities error")
        return
    }

    json = await response.json()

    console.log(json)    
    result = {
      ...result, activityData:json
    }

    setIsLoaded(true)

    return result
  }

  const [isLoaded, setIsLoaded] = useState(false)

  function createLoading() {
    return (
      <div className = "w-full h-full flex justify-center">
        <h1 className = "text-white text-4xl">
          LOADING ....
        </h1>
      </div>
    )
  }

    function createPage() {
      return (
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
            <Grid container direction="column">
              <Grid p={3} sx={{ width: "100%" }}>
              <CreateProfileDialog/>
              </Grid>
              <Grid
                item
                ml={0}
                mt={4}
                p={3}
                spacing={0}
                style={{ textAlign: "left" }}
              >
                <Grid container direction="column" sx={{p:{xs:0, md:0, lg:6, xl:12}}} >
                  <Grid item>
                    <Typography
                      variant="h2"
                      gutterBottom
                      component="div"
                      color="#fdfdfd"
                      sx={{ textShadow: "3px 3px 4px black" }}
                    >
                      Welcome to {geoData.name}
                      <TicketInfoTest/>
                    </Typography>

                  </Grid>
                  <Grid item>
                    <WeatherCard geo={geoData} weather={weatherData} />
                    
                  </Grid>
                  
                </Grid>
              </Grid>
              <Grid 
                    item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      
                    }}
                    mt={14}
                  >
                    <ArrowDownwardOutlinedIcon
                      className="svgIcons" 
                      style={{ color: "#fdfdfd" }}
                      
                    />
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
              Widen your world.
            </Typography>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={2}
            style={{ backgroundColor: "#c70a0c" }}
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
                sx={{ textShadow: "0px 2px 4px black" }} className = "underline decoration-black decoration-4"
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
            style={{ backgroundColor: "#c70a0c" }}
          />
          <ParallaxLayer
            offset={3}
            speed={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              width:"100%"
            }}
          >
            <Grid container direction="column" mt={10}>
              <Typography ml={4}  
                variant="h2"
                color="#fdfdfd"
                sx={{ textShadow: "0px 2px 4px black" }} className = "underline decoration-black decoration-4"
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
                  <CategoriesImaged titleName="Food" />
                  <CategoriesImaged titleName="Sights" />
                  <CategoriesImaged titleName="Shopping" />
                  <CategoriesImaged titleName="Nightlife" />
                </Grid>
              </Grid>
            </Grid>
          </ParallaxLayer>
        </Parallax>
      </Box>
      )
    }

    function render() {
      if(!isLoaded) {
        return createLoading()
      } else {
        return createPage()
      }
    }

  return (
      <>
        {render()}
      </>
  );
}