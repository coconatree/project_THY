import { useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import TextField from "@mui/material/TextField";

import "../index.css";

import { useNavigate } from "react-router-dom";

/** 
    This component handles the reservation code and 
    related communications with the backend   
*/

import useTicketStore from "../store/TicketStore";

export default function ReservationCodeField(props) {
	const [formData, setFormData] = useState({
		PNR: "",
	});

	const setTicketInfo = useTicketStore((state) => state.setTicketInfo);

	const navigate = useNavigate();

	async function handleFormSubmit(event) {
		let json = await fetchCustomerInfo();

		setTicketInfo(
			json.pnr,
			json.isReturnFlight,
			json.flightNumber,
			json.ticketNumber,
			json.boardingPassQrCode,
			json.seatNumber,
			json.arrivalDate,
			json.arrivalTime,
			json.arrivalCityName,
			json.arrivalCountryCode,
			json.departureDate,
			json.boardingTime,
			json.departureTime,
			json.departureCityName,
			json.departureCountryCode,
			json.checkInInfo,
			json.namePrefix,
			json.firstName,
			json.lastName,
			true
		);
		navigate("/activities");
	}

	function handleChange(event) {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	}

	async function fetchCustomerInfo() {
		let response = await fetch(
			`http://localhost:8080/api/v1/customer/search/${formData.PNR}`
		).catch((e) => alert("PNR number does not exists"));

		/** 
            Need to find a way to show that the given city is not in our service area
        */

		if (!response.ok) {
			alert(
				"There are no reservations with the given reservation code please check that it is correct"
			);
			return;
		}
		let json = await response.json();
		console.log(json);
		return json;
	}

	const formHandler = async () => {
		await handleFormSubmit();
	};

	function createReservationCodeForm() {
		return (
			<>
				<div className='flex flex-col justify-center w-full md:mt-20 lg:mt-5'>
					<div className='flex flex-row justify-between ml-0 lg:mt-0 md:justify-start w-full m-5'>
						<div className='base-8/12 bg-white bg-opacity-80 m-2 w-full md:w-8/12 lg:w-8/12'>
							<TextField
								className='rounded-md'
								name='PNR'
								id='PNR'
								label='PNR'
								variant='filled'
								color='error'
								type='text'
								onChange={handleChange}
								value={formData.PNR}
								style={{ paddingRight: "7px" }}
							/>
						</div>
						<div className='base-3/12 m-2 w-full'>
							<button
								onClick={formHandler}
								className='h-12 m-max rounded-md p-2 bg-red-600 w-full md:w-3/12 lg:w-3/12'
							>
								<span className='font-sans text-xl text-extrabold text-white'>
									Boost
								</span>
								<RocketLaunchIcon className='text-white' />
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}

	return <>{createReservationCodeForm()}</>;
}
