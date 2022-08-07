import useTicketStore from "../store/TicketStore"

export default function TicketInfoTest() {
    
    const { 
        pnr, 
        firstName, 
        lastName,
        arrivalCityName,
    } = useTicketStore(
        (state) => ({ 
            pnr: state.pnr,
            firstName: state.firstName,
            lastName: state.lastName,
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
                {firstName}
                <br></br>
                {lastName}
                <br></br>
                {arrivalCityName}
            </p>
        </div>
    )

}