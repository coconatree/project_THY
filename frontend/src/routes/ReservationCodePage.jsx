
import {Container, createTheme, Typography} from '@mui/material';
import { Box } from '@mui/material';
import { responsiveFontSizes,  ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { alpha } from "@mui/material/styles";

import ReservationCodeField from "../components/ReservationCodeField";

import "../index.css"

import '../static/style/reservationPage.css'

export default function ReservationCodePage() {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <div className = "flex flex-col mt-2 ml-5 mr-5 mb-1 lg:m-20 h-full sm:w-max-full w-max-6xl">
            <div className = "flex flex-col w-full mt-1 p-2 lg:p-5 ">
                <div className = "flex justify-start sm:w-full p-2">
                    <h5 className = "italic text-white font-sans text-l text-bold">
                        With helps of Turkish Arilines
                    </h5>
                </div>
                <div className = "flex justify-start p-2">
                    <h1 className = "text-2xl font-sans md:text-4xl font-bold leading-normal rounded-md text-white">
                        Bring excitement to your journeys with 
                        <br></br>
                        <span className = "underline decoration-red-600 decoration-4">
                            Turkish Airlines Trip Boaster
                        </span>
                    </h1>
                </div> 
                <div className = "flex justify-start p-2">
                    <h3 className = "font-sans text-sm md:text-xl font-normal text-white">
                        This is a minimal vialable product developed for a competition orginized by 
                        <span> 
                            Turkish Airlines 
                        </span>
                    </h3>
                </div>
                <div className = "p-2">
                    <ReservationCodeField/>
                </div>
            </div>
        </div>
    )
}
