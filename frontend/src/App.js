import { Routes, Route } from "react-router-dom";
import ReservationCodePage from "./page/ReservationCodePage";
import ActivitiesPage from "./page/ActivitiesPage";

function App() {
	return (
		<Routes>
			<Route path='/' element={<ReservationCodePage />} />
			<Route path='/activities' element={<ActivitiesPage />} />
		</Routes>
	);
}

export default App;
