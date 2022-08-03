import useState from "react";

import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

import MainPage from "../components/MainPageComponent";

import ImageContainer from "../components/ImageContainer"

import bg01 from "../static/images/reservation_page_background.jpg"

import "../static/style/test.css"

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
        <Box>
            <ImageContainer image_url = {bg01}>
                <div className = "test">
                    dadaw
                    <Typography variant="h4" gutterBottom component="div">
                        Welcome to Paris
                    </Typography>
                </div>
            </ImageContainer>
            <MainPage/>
        </Box> 
    )
}
