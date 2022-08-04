import { useState } from "react";
import { Box, Button } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import useCityStore     from "../store/CityStore";
import useCustomerStore from "../store/CustomerStore"
import TextField from '@mui/material/TextField';
import { createTheme, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Carousel from 'react-material-ui-carousel';

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

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        PNR: ""
    });
    
    const setCity = useCityStore((state) => state.setCity)
    const setInfo = useCustomerStore((state => state.setInfo))
    
    const {firstname, lastname} = useCustomerStore((state) => ({firstname: state.firstname, lastname: state.lastname }))

    function handleFormSubmit(event) {
        event.preventDefault()
        fetchCustomerInfo()
    }

    function handleChange(event) {
        setFormData({  ...formData, [event.target.name]: event.target.value });
    }


    async function fetchCustomerInfo() {
        
        let response = await fetch(`http://localhost:8080/api/v1/customers/${formData.PNR}`)
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
          
                <form className = "reservationForm" onSubmit = {event => handleFormSubmit(event)}>

 <TextField name="PNR" id="PNR" label="Bilet ya da rezervasyon kodu (PNR)" variant="filled"  color="error" type     = "text" style = {{width: 280,paddingRight: '7px'}}
                            
                                onChange={handleChange} value={formData.PNR} />
                        <TextField name="name" id="name" label="Yolcunun adı" variant="filled"  color="error" type= "text" onChange={handleChange} value={formData.name}  style = {{paddingRight: '7px' }}/>
                                
                            
                         <TextField name="surname" id="surname" label="Yolcunun soyadı" variant="filled"  color="error" type= "text" onChange={handleChange} value={formData.surname}  style = {{paddingRight: '7px'}} />
            
                    <ColorButton  variant="filled" sx={{ boxShadow:"2", backgroundColor: "#E91932", maxWidth: '100px', maxHeight: '100px' , minHeight: '56px', minWidth: '50px'}}>
                        Boost <RocketLaunchIcon />
                    </ColorButton>
                      
                </form>     
               

          
        )
    }

    return (
        <>  
            {createReservationCodeForm()}
        </>
    )
}