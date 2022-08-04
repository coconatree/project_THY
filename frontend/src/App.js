import { Routes, Route } from "react-router-dom";
import ReservationCodePage from "./routes/ReservationCodePage";
import ActivitiesPage from "./routes/ActivitiesPage";

import Navbar from "./components/NavBar";

import "./static/style/main.css"
import TestPage from "./routes/TestPage";

function App() {
	return (
		<div className="bacground_image">
			<Navbar/>
			<Routes>
				<Route path='/' element={<ReservationCodePage />} />
				<Route path='/activities' element={<ActivitiesPage />} />
				<Route path='/test' element=
				{
					<TestPage></TestPage>	
				} />
			</Routes>
		</div>
	);
}

export default App;
