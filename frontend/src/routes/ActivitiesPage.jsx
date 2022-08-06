import {useState} from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import MainPage from "../components/MainPageComponent";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../static/style/main.css";
import CategoriesImaged from "../components/CategoriesImaged";
import WeatherCard from "../components/WeatherCard";

import useTicketStore from "../store/TicketStore";
import { useEffect } from "react";

export default function ActivitiesPage() {
  //   const [activities, setActivities] = useState([]);

  const ticketData = useTicketStore((state) => state.data);

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

  useEffect( async () => {

    let result = await fetchAllInfo()
   
    setGeoData( {...result.geoData})
    setWeatherData({...result.weatherData})
    
  }, [])

  async function fetchAllInfo() {
        
    let response = await fetch("http://localhost:8080/api/v1/geodata/" + ticketData.arrivalCityName)
        .catch(e => alert("City is not valid"))

        console.log(response)
    if (!response.ok) {
        alert("There is no city with given name")
        return
    }

    let json = await response.json()

    let result = {geoData:json};

    response = await fetch(`http://localhost:8080/api/v1/weather/${json.latitude}/${json.longitude}`)
        .catch(e => alert("Latitude or Longitude is not valid"))

        console.log(response)
    if (!response.ok) {
        alert("Latitude or Longitude is not valid")
        return
    }

    json = await response.json()

    result = {
      ...result, weatherData:json
    }

    return result

}

async function fetchWeatherInfo() {
    
    console.log(geoData)
    let response = await fetch(`http://localhost:8080/api/v1/weather/${geoData.latitude}/${geoData.longitude}`)
        .catch(e => alert("Latitude or Longitude is not valid"))

        console.log(response)
    if (!response.ok) {
        alert("Latitude or Longitude is not valid")
        return
    }

    let json = await response.json()

    return json
}

// async function retrieveActivityList() {
  //   let response = await fetch("http://localhost:8080/api/v1/activities").catch(
  //     (e) => alert("Error retrievig the data please try at a later time")
  //   );

  //   if (!response.ok) {
  //     alert(
  //       "There are no activities in the given location plese try another one"
  //     );
  //   }


    
  //   let json = await response.json();

  //   //       setActivities(json.activities)
  // }

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
              <MainPage />
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
  );
}