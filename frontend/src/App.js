import { Routes, Route } from "react-router-dom";
import ReservationCodePage from "./routes/ReservationCodePage";
import ActivitiesPage from "./routes/ActivitiesPage";

import ImageBackground from "./components/ImageContainer"
import Navbar from "./components/NavBar";

import "./static/style/main.css"

function App() {
	return (
		<div className="bacground_image">
			<Navbar/>
			<Routes>
				<Route path='/' element={<ReservationCodePage />} />
				<Route path='/activities' element={<ActivitiesPage />} />
				<Route path='/test' element=
				{
					<ImageBackground imageUrl = "./static/images/reservation_page_background.jpg">
						<label className = "lbl">Hello World !!!</label>
					</ImageBackground>
				} />
			</Routes>
		</div>
	);
}

export default App;
