import { useState } from "react";
import { Box, Button } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { createTheme, styled } from '@mui/material/styles';

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
        setFormData({  ...formData, [event.target.name]: event.target.value });
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

    function createReservationCodeForm() {
        return (
          
                <form className = "reservationForm">

                        <TextField 
                            name = "PNR" 
                            id = "PNR" 
                            label = "Bilet ya da rezervasyon kodu (PNR)" 
                            variant = "filled"  
                            color = "error" 
                            type = "text" 
                            style = {{width: 280,paddingRight: '7px'}}
                            onChange = {handleChange} value={formData.PNR} 
                        />
                        <TextField 
                            name = "name" 
                            id = "name" 
                            label = "Yolcunun adi" 
                            variant = "filled"  
                            color = "error" 
                            type = "text" 
                            onChange = {handleChange} 
                            value = {formData.name}
                            style = {{paddingRight: '7px' }}
                        />
                                    
                        <TextField 
                            name = "surname" 
                            id = "surname" 
                            label = "Yolcunun soyadi" 
                            variant = "filled"  
                            color = "error" 
                            type = "text" 
                            onChange = {handleChange} 
                            value = {formData.surname}
                            style = {{paddingRight: '7px'}} 
                        />
                        <Link to = "/activities" onClick={formHandler}>
                            <ColorButton 
                                variant="filled" 
                                sx={{ 
                                    boxShadow:"2", 
                                    backgroundColor: "#E91932", 
                                    maxWidth: '100px', 
                                    maxHeight: '100px', 
                                    minHeight: '56px', 
                                    minWidth: '50px'
                                }
                            }>
                                Boost 
                                <RocketLaunchIcon/>
                            </ColorButton>
                        </Link>
                </form>     
               

          
        )
    }

    return (
        <>  
            {createReservationCodeForm()}
        </>
    )
}