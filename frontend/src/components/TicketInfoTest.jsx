import useTicketStore from "../store/TicketStore"

export default function TicketInfoTest() {
    
    const { 
        pnr, 
        firstname, 
        lastname,
        arrivalCityName,
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

    return (
        <div>
            <p>
                <br></br>
                EMRE EMRE EMRE EMRE EMRE
                <br></br>
                {pnr}
                <br></br>
                {firstname}
                <br></br>
                {lastname}
                <br></br>
                {arrivalCityName}
            </p>
        </div>
    )

}