import { Routes, Route } from "react-router-dom";
import ReservationCodePage from "./routes/ReservationCodePage";
import ActivitiesPage from "./routes/ActivitiesPage";
import React from 'react';

import "./static/style/main.css";

import "./index.css";

function App() {
	return (
		<div className=' bg-black h-full w-full bacground_image'>
					<Routes>
						<Route
							path='/'
							element={
								<ReservationCodePage className='flex flex-col bg-slate-900 bg-opacity-60 justify-center brightness-110 h-full w-full' />
							}
						/>
						<Route path='/activities' element={<ActivitiesPage />} />
					</Routes>
		</div>
	
	);
}

export default App;
