import { Routes, Route } from "react-router-dom";
import ReservationCodePage from "./routes/ReservationCodePage";
import ActivitiesPage from "./routes/ActivitiesPage";

import Navbar from "./components/NavBar";

import "./static/style/main.css"

import "./index.css"

function App() {
	return (
		<div className="bacground_image bg-black h-full w-full">
			<div className = "h-full w-full">
				<Navbar className = "brightness-110 bg-slate-900 bg-opacity-30 w-full"/>
				<div className = "flex flex-col bg-slate-900 bg-opacity-60 justify-center brightness-110 h-full w-full">
					<Routes>
						<Route path='/' element={<ReservationCodePage />} />
						<Route path='/activities' element={<ActivitiesPage />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
