import { useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { createTheme, styled } from '@mui/material/styles';

import "../index.css"

/** 
    This component handles the reservation code and 
    related communications with the backend   
*/

import useTicketStore from "../store/TicketStore"

export default function ReservationCodeField(props) {


    const theme = createTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    });

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        PNR: ""
    });
    
    const setTicketInfo = useTicketStore((state => state.setTicketInfo))
    
    const state = useTicketStore((state) => state)

    async function handleFormSubmit(event) {
    
        let json = await fetchCustomerInfo()
        
        console.log(json)

        setTicketInfo({
            pnr: json.pnr,
            firstname: json.firstname,
            lastname: json.lastname,
            departureCityName: json.departureCityName,
            arrivalCityName: json.arricalCityName,
            arrivalCityLatitude: json.arrivalCityLatitude,
            arrivalCityLongitude: json.arrivalCityLongitude,
            isLogged: true,
        })

        console.log(state)

        
    }

    function handleChange(event) {
        if (event.target.name == "PNR") {
            if (event.target.value.length == 0) {
                setPnrHelper("")
            } else {
                setPnrHelper("PNR")
            }
        }
        console.log("HERE")
        setFormData({  ...formData, [event.target.name]: event.target.value });
        console.log("FORM" + formData)
    }

    async function fetchCustomerInfo() {
        
        let response = await fetch(`http://localhost:8080/api/v1/customers/search/${formData.PNR}/${formData.name}/${formData.surname}`)
            .catch(e => alert("PNR number does not exists"))

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

    const [pnrHelper, setPnrHelper] = useState("");

    const ColorButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#E91932",
        color: "#fff",
        '&:active': {
          backgroundColor: "#E91932",
        },
            '&:focus': {
            backgroundColor: "#E91932",
        },
            '&:hover': {
            backgroundColor: "#E91932",
        },
    }));

    const formHandler = async () => {
        await handleFormSubmit()
    }

    function createCard() {
        return (
            <div className = "h-3/4 flex flex-row r-5 shadow-md justify-center">
                <div className = "basis-2/5 flex shadow-md flew row">
                    <label className = "text-lg">
                        PNR
                    </label>
                    <input 
                        className = "p-2 m-2 w-42 h-22 bg-slate-300 text-black drop-shadow-lg " 
                        name = "PNR" 
                        id = "PNR" 
                        label = "Bilet ya da rezervasyon kodu (PNR)" 
                        variant = "filled"  
                        color = "error" 
                        type = "text" 
                        onChange = {handleChange} 
                        value={formData.PNR} 
                    />
                </div>
                <div className = "basis-1/5 flex shadow-md">
                    <label className = "text-lg">
                        PNR
                    </label>
                    <input 
                        placeholder = "Isim"
                        className = "p-2 m-2 w-42 h-22 bg-slate-300" 
                        name = "name" 
                        id = "name" 
                        label = "Yolcunun adi" 
                        variant = "filled"  
                        color = "error" 
                        type = "text" 
                        onChange = {handleChange} 
                        value = {formData.name}
                    />
                </div>
                <div className = "basis-1/5 flex flex-rowshadow-md">
                    <div className = "basis-1/3">
                        <label for = "surname" className = "basis-1/3 text-lg">
                            Soyad
                        </label>
                    </div>
                    <div className = "basis-2/3">
                        <input
                            placeholder = "Soyad"
                            className = "basis-2/3 p-2 m-2 h-22 bg-slate-300" 
                            name = "surname"
                            id = "surname" 
                            label = "Yolcunun soyadi" 
                            variant = "filled"  
                            color = "error" 
                            type = "text"
                            onChange = {handleChange} 
                            value = {formData.surname}
                        />
                    </div>
                </div>
                
                <div className = "basis-1/5 flex shadow-md justify-center ">
                    <Link to = "/activities" onClick={formHandler}>
                        <button
                            className = "p-2 m-2 w-28 h-22 bg-red-600 flex"
                        >
                        <span className = "italic text-lg font-mono font-bold text-white">
                            Boost
                        </span>
                            <RocketLaunchIcon className = "text-white"/>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    function createReservationCodeForm() {
        return (
            <>
                <form className = "flex flex-col justify-center w-full md:mt-20 lg:mt-5">
                        <div className = "flex flex-row flex-wrap  justify-between ml-0 lg:mt-0 md:justify-start w-full m-5">
                            <div className = "base-3/12 m-2 w-full md:w-5/12 lg:w-3/12">
                                <input
                                    className = "bg-opacity-0 text-center w-full h-12 rounded-md p-2 shadow-sm shadow-white"
                                    placeholder = "PNR Number"
                                    name = "PNR" 
                                    id = "PNR" 
                                    variant = "filled"  
                                    type = "text" 
                                    onChange = {handleChange} value={formData.PNR} 
                                />
                            </div>
                            <div>
                            <input
                                type="email"
                                class="
                                    form-control
                                    block
                                    w-full
                                    h-15
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    focus:text-black focus:bg-white focus:border-slate-600 focus:outline-none
                                "
                                name = "PNR"
                                onChange = {e => handleChange(e)}
                                value = {state.PNR}
                                id="PNR"
                                placeholder="PNR"
                                />
                                <div class="text-sm text-white ml-1 mt-1">{pnrHelper}</div>
                            </div>
                            <div className = "base-3/12 bg-white bg-opacity-80 m-2 w-full md:w-5/12 lg:w-4/12">
                                <TextField
                                    name = "name" 
                                    id = "name" 
                                    label = "Name" 
                                    variant = "filled"  
                                    color = "error" 
                                    type = "text" 
                                    onChange = {handleChange} 
                                    value = {formData.name}
                                    style = {{paddingRight: '7px' }}
                                />
                            </div>          
                            <div className = "base-3/12 bg-white bg-opacity-80 m-2 w-full md:w-5/12 lg:w-4/12">
                                <TextField 
                                    className = "rounded-md"
                                    name = "surname" 
                                    id = "surname" 
                                    label = "Surname" 
                                    variant = "filled"  
                                    color = "error" 
                                    type = "text" 
                                    onChange = {handleChange} 
                                    value = {formData.surname}
                                    style = {{paddingRight: '7px'}} 
                                />
                            </div>
                            <div className = "base-3/12 m-2 w-full">
                                <Link to = "/activities" onClick={formHandler}>
                                    <button className = "m-max rounded-md p-2 bg-red-600 w-full md:w-5/12 lg:w-3/12 flex justify-center">
                                        <span className = "font-sans text-xl text-extrabold text-white">
                                            Boost
                                        </span>
                                        <div className = "w-2"></div> 
                                        <RocketLaunchIcon className = "text-white"/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
            </>     
        )
    }

    return (
        <>  
            {createReservationCodeForm()}
        </>
    )
}