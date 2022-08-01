import { useState } from "react";
import MainPage from "../routes/main_page/main_page_component";
import { Box } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import {  TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function ActivitiesPage() {

    const [activities, setActivities] = useState([]);

 
    async function retrieveActivityList() {

        let response = await fetch("http://localhost:8080/api/v1/activities")
            .catch(e => alert("Error retrievig the data please try at a later time"))
        
        if (!response.ok) {
            alert("There are no activities in the given location plese try another one")
        }

        let json = await response.json();

        setActivities()
    } 

    return (
        <Box >
            <Navbar />
            <Box >
            <Typography variant="h4" gutterBottom component="div">
        Welcome to Paris
      </Typography>
                  </Box>
            <MainPage/>
        </Box>
    )
}
