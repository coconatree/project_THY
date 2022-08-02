import { Routes, Route } from "react-router-dom";
import ReservationCodePage from "./routes/ReservationCodePage";
import ActivitiesPage from "./routes/ActivitiesPage";

import Navbar from "./components/NavBar";

import "./static/style/main.css"

function App() {
	return (
		<div className="bacground_image">
			<Navbar/>
			<Routes>
				<Route path='/' element={<ReservationCodePage />} />
				<Route path='/activities' element={<ActivitiesPage />} />
			</Routes>
		</div>
	);
}

export default App;
