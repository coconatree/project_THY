import useState from "react";
import Grid from '@mui/material/Grid';

import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import { alpha } from "@mui/material/styles";

import MainPage from "../components/MainPageComponent";

import ImageContainer from "../components/ImageContainer"


import bg01 from "../static/images/reservation_page_background.jpg"

import "../static/style/main.css"
import CategoriesImaged from "../components/CategoriesImaged";
import TicketInfoTest from "../components/TicketInfoTest";
import WeatherCard from "../components/WeatherCard";

export default function ActivitiesPage() {

 //   const [activities, setActivities] = useState([]);

    async function retrieveActivityList() {

        let response = await fetch("http://localhost:8080/api/v1/activities")
            .catch(e => alert("Error retrievig the data please try at a later time"))
        
        if (!response.ok) {
            alert("There are no activities in the given location plese try another one")
        }

        let json = await response.json();

 //       setActivities(json.activities)
    } 


    return (
        <Box >

            <Grid container direction="column">
                    
                    <Grid item  ml = {0} mt={4} p={3} spacing={0} style={{textAlign: "left"}}>
                        <Grid container direction="column">   
                            <Grid item>
                                <Typography variant="h3" gutterBottom component="div">
                                    Welcome to Paris
                                </Typography>
                            </Grid>
                            <Grid item>

                            <WeatherCard  />
                            </Grid>
                            
                        </Grid>
                    </Grid>

                
                    <Grid item xs={7} mt={5} p={4} spacing={2} justifyContent="center" alignItems="center" boxShadow="3" backgroundColor={alpha("#E5E4E2", 0.9)} borderRadius="6px" style={{textAlign: "center"}}>
                        <MainPage/>
                    </Grid>

                    <Grid item mt={2} mb p={3} >
                        <Grid container mt={5} p={7}  borderRadius="6px" boxShadow="3" backgroundColor={alpha("#E5E4E2", 0.9)} style={{textAlign: "left", display:"flex", mX:"auto"}}>
                        <CategoriesImaged/>
                        
                        <CategoriesImaged/>
                            <CategoriesImaged/>
                            <CategoriesImaged/>
                        </Grid>
                    </Grid>
            </Grid>

        </Box> 

    )
}
