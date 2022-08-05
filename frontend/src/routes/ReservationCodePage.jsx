
import ReservationComponent02 from "../components/ReservationComponent02";

import "../index.css"

import '../static/style/reservationPage.css'
import LandingHero from '../components/LandingHero';

export default function ReservationCodePage() {

    return (
        <div className = "w-full h-full flex flex-col justify-around lg:content-center lg:justify-start">
            <LandingHero/>
            <ReservationComponent02/>
        </div>
    )
}
