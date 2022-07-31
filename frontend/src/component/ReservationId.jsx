import { useState } from "react"

export default function Reservation() {
    
    const [reservationId, setReservationId] = useState("");

    function handelReservationFormSubmit(event) {
        event.preventDefault()
    }

    function handleReservationIdChange(event) {
        console.log(event.target.value)
    }

    return (
        <div>
            <form onSubmit = {handelReservationFormSubmit()}>
                <input value = {reservationId} onChange = {handleReservationIdChange()} placeholder = "Reservation Id"/>
            </form>
        </div>
    ) 
}   