import { useState } from "react";
import { Box, Button } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import useCityStore     from "../store/CityStore";
import useCustomerStore from "../store/CustomerStore"
import TextField from '@mui/material/TextField';
import { createTheme, styled } from '@mui/material/styles';

/** 
    This component handles the reservation code and 
    related communications with the backend   
*/

export default function ReservationCodeField() {


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

    const [reservationCode, setReservationCode] = useState("");
    
    const setCity = useCityStore((state) => state.setCity)
    const setInfo = useCustomerStore((state => state.setInfo))
    
    const {firstname, lastname} = useCustomerStore((state) => ({firstname: state.firstname, lastname: state.lastname }))

    function handleFormSubmition(event) {
        event.preventDefault()
        fetchCustomerInfo()
    }

    function handleReservationCodeFieldChange(event) {
        setReservationCode(event.target.value)
    }

    const [flag, setFlag] = useState(true);


    async function fetchCustomerInfo() {
        
        let response = await fetch(`http://localhost:8080/api/v1/customers/${reservationCode}`)
            .catch(e => alert("Error retrievig the data please try at a later time"))
        
        if (!response.ok) {
            alert("There are no reservations with the given reservation code please check that it is correct")
            return
        }

        let json = await response.json()

        console.log(json)

        setInfo(json.firstname, json.lastname)
        setCity(json.latitude, json.longitude)

        /** 
            If succesfull this function will redirect to the events 
            page and will pass the data to it using the react <Link/> 
            component's functionality. 
        */
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

    function createReservationCodeForm() {
        return (
            <Box className = "reservationForm">
                <form className = "reservationForm" onSubmit = {event => handleFormSubmition(event)}>

                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >      
                        <TextField id="PNR" label="Bilet ya da rezervasyon kodu (PNR)" variant="filled"  color="error" type     = "text" 
                                value    = {reservationCode} 
                                onChange = {event => handleReservationCodeFieldChange(event)}/>
                        <TextField id="isim" label="Yolcunun adı" variant="filled"  color="error" type     = "text" 
                              />
                         <TextField id="soyisim" label="Yolcunun soyadı" variant="filled"  color="error" type     = "text" 
                           />
                        
                    
                    <ColorButton  variant="filled" sx={{backgroundColor: "#E91932", m: 1, width: '25ch' }}>
                        Boost <RocketLaunchIcon />
                    </ColorButton>
                    </Box>
                </form>     
            </Box>    
        )
    }

    return (
        <>  
            {createReservationCodeForm()}
        </>
    )
}