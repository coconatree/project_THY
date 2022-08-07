import { useState } from "react";
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import React from 'react';
import TextField from "@mui/material/TextField";
import "../index.css";

import { useNavigate } from "react-router-dom";

/** 
    This component handles the reservation code and 
    related communications with the backend   
*/

import useTicketStore from "../store/TicketStore";

export default function ReservationCodeField(props) {

    const [formData, setFormData] = useState({
        PNR: "",
    });
    
    const setTicketInfo = useTicketStore((state => state.setTicketInfo))

    const navigate = useNavigate()

    async function handleFormSubmit(event) {
    
        let json = await fetchCustomerInfo();


        setTicketInfo(
            json.pnr,
		    json.isReturnFlight,
		    json.flightNumber,
		    json.ticketNumber,
		    json.boardingPassQrCode,
		    json.seatNumber,
		    json.arrivalDate,
		    json.arrivalTime,
		    json.arrivalCityName,
		    json.arrivalCountryCode,
		    json.departureDate,
		    json.boardingTime,
		    json.departureTime,
		    json.departureCityName,
		    json.departureCountryCode,
		    json.checkInInfo,
		    json.namePrefix,
		    json.firstName,
		    json.lastName,
            true
        )
        navigate("/activities")
    }

    function handleChange(event) {
        setFormData({  ...formData, [event.target.name]: event.target.value });
    }

    async function fetchCustomerInfo() {
        
        let response = await fetch(`http://localhost:8080/api/v1/customer/search/${formData.PNR}`)
            .catch(e => alert("There are no reservations with the given reservation code please check that it is correct"))

        /** 
            Need to find a way to show that the given city is not in our service area
        */

        if (!response.ok) {
            alert("There are no reservations with the given reservation code please check that it is correct")
            return
        }
        let json = await response.json()

        return json
    }
    

    const formHandler = async () => {
        await handleFormSubmit()
    }

    function createReservationCodeForm() {
        return (
            <>
                <div className = "flex flex-col justify-center w-full md:mt-2 lg:mt-5">
                        <div className = "flex flex-row justify-between ml-0 lg:mt-0 md:justify-start w-full m-5">
                            <div className = "base-8/12 bg-white bg-opacity-80 m-2 w-8/12 sm:w-9/12 md:w-6/12 lg:w-4/12">
                                <TextField 
                                    className = "w-full h-full"
                                    name = "PNR" 
                                    id = "PNR" 
                                    label = "Reservation Code (PNR)" 
                                    variant = "filled"  
                                    color = "error" 
                                    type = "text" 
                                    onChange = {handleChange} 
                                    value = {formData.PNR}
                                />
                            </div>
                            <div className = "inline-block align-middle base-3/12 m-2 w-4/12 sm:w-3/12 md:w-3/12 lg:w-3/12">                    
                                <button onClick={formHandler} className = "h-full m-max rounded-md p-2 bg-red-700 w-full md:w-full lg:w-9/12"  >
                                    <RocketLaunchOutlinedIcon fontSize="large" className = "text-white inline-block align-middle"/>
                                    <span className = "align-middle h-full font-sans text-xl font-bold text-white pr-3 pl-3">
                                    Boost  
                                    </span> 
                     
                                </button>
                            </div>
                        </div>
                    </div>
            </>     
        )
    }

    return (
        <>  
            {createReservationCodeForm()}
        </>
    )
}