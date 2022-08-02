import { useState } from "react";

import useCityStore     from "../store/CityStore";
import useCustomerStore from "../store/CustomerStore"

/** 
    This component handles the reservation code and 
    related communications with the backend   
*/

export default function ReservationCodeField() {

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

    function createReservationCodeForm() {
        return (
            <div className = "reservationForm">
                <form className = "reservationForm" onSubmit = {event => handleFormSubmition(event)}>
                    <label>
                        Reservation Code 
                    </label>
                    <input 
                        type     = "text" 
                        value    = {reservationCode} 
                        onChange = {event => handleReservationCodeFieldChange(event)}
                    />
                    <button>
                        Submit Code
                    </button>
                </form>     
            </div>    
        )
    }

    return (
        <>  
            {createReservationCodeForm()}
        </>
    )
}