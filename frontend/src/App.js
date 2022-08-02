import { Routes, Route } from "react-router-dom";
import ReservationCodePage from "./page/ReservationCodePage";
import ActivitiesPage from "./page/ActivitiesPage";

import Navbar from "./components/navbar/navbar";

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
