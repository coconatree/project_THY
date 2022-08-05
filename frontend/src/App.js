import { Routes, Route } from "react-router-dom";
import ReservationCodePage from "./routes/ReservationCodePage";
import ActivitiesPage from "./routes/ActivitiesPage";

import Navbar from "./components/NavBar";

import "./static/style/main.css"

import "./index.css"
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar className ="
				brightness-110 
				bg-[#1b1527] 
				bg-opacity-50 
				h-full 
				w-full
				"
			/>
			<section className ="
					flex 
					flex-col 
					bg-[#292138] 
					bg-opacity-20 
					justify-start 
					h-full
					w-full
					"
				>
				<Routes>
					<Route path='/' element = {
						<ReservationCodePage/>
						} 
					/>
					<Route path='/activities' element = {
						<ActivitiesPage />
						} 
					/>
				</Routes>
			</section>
			<Footer/>
		</>
	);
}

export default App;
