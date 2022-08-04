import { useEffect } from "react"
import useTicketStore from "../store/TicketStore"

export default function TicketInfoTest() {
    
    const { 
        pnr, 
        firstname, 
        lastname,
        departureCityName,
        arrivalCityName,
        arrivalCitylatitude,
        arrivalCitylongitude,
        isLogged 
    } = useTicketStore(
        (state) => ({ 
            pnr: state.pnr,
            firstname: state.firstname,
            lastname: state.lastname,
            departureCityName: state.departureCityName,
            arrivalCityName: state.arrivalCityName,
            arrivalCityLatitude: state.arrivalCityLatitude,
            arrivalCityLongitude: state.arrivalCityLongitude,
            isLogged: state.isLogged
        })
      )

    useEffect(() => {
        if (!isLogged) {
            alert("Go TO PNR Page Empty Data")
        }
    }, [])

    return (
        <div>
            <p>
                <br></br>
                EMRE
                <br></br>
                {pnr}
                <br></br>
                {firstname}
                <br></br>
                {lastname}
                <br></br>
                {departureCityName}
                <br></br>
                {arrivalCityName}
                <br></br>
                {arrivalCitylatitude}
                <br></br>
                {arrivalCitylongitude}
            </p>
        </div>
    )

}