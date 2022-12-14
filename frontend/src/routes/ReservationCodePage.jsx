
import {createTheme} from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import React from 'react';


import ReservationCodeField from "../components/ReservationCodeField";
import Navbar from "../components/NavBar";

import "../index.css"
import '../static/style/main.css'
import '../static/style/reservationPage.css'

export default function ReservationCodePage() {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <div className=' bacground_image h-full w-full'>
        <Navbar/>
        <div>
        <div className = "flex flex-col mt-20 ml-5 mr-5 mb-1 lg:m-20 h-full sm:w-max-full w-max-6xl">
            <div className = "flex flex-col w-full mt-1 p-2 lg:p-5 ">
                <div className = "flex justify-start sm:w-full p-2">
                    <h5 className = "italic text-white font-sans text-l text-bold">
                    <span style={{color:"#b6291e"}} className = "decoration-red-600 decoration-4">
                        Widen Your World
                        </span>
                    </h5>
                </div>
                <div className = "flex justify-start p-2">
                    <h1 className = "text-2xl font-sans md:text-5xl font-bold leading-normal md:leading-snug rounded-md text-white drop-shadow-lg shadow-black">
                        Fill your journey with unforgettable experiences with 
                        <br></br>
                        <span className = "underline decoration-red-700 decoration-4" style={{textUnderlineOffset: 12}}>
                            Turkish Airlines Trip Booster
                        </span>
                    </h1>
                </div> 

                <div className = "p-2">
                    <ReservationCodeField/>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
