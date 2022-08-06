import create from "zustand";

const useTicketStore = create((set) => ({
	data: {
		pnr: "",
		firstName: "",
		lastName: "",
		departureCityName: "",
		departureCountryCode: "",
		arrivalCityName: "",
		arrivalCountryCode: "",
		departureDate: "",
		boardingTime: "",
		departureTime: "",
		isReturnFlight: false,
		flightNumber: "",
		ticketNumber: "",
		boardingPassQrCode: "",
		seatNumber: "",
		arrivalDate: "",
		arrivalTime: "",
		checkInInfo: "",
		namePrefix: "",
	},
	setTicketInfo: (json) => {
		set((state) => ({
			data: {
				...state.data,
				pnr: json.pnr,
				firstName: json.firstName,
				lastName: json.lastName,
				departureCityName: json.departureCityName,
				departureCountryCode: json.departureCountryCode,
				arrivalCityName: json.arrivalCityName,
				arrivalCountryCode: json.arrivalCountryCode,
				departureDate: json.departureDate,
				boardingTime: json.boardingTime,
				departureTime: json.departureTime,
				isReturnFlight: json.isReturnFlight,
				flightNumber: json.flightNumber,
				ticketNumber: json.ticketNumber,
				boardingPassQrCode: json.boardingPassQrCode,
				seatNumber: json.seatNumber,
				arrivalDate: json.arrivalDate,
				arrivalTime: json.arrivalTime,
				checkInInfo: json.checkInInfo,
				namePrefix: json.namePrefix,
			},
		}));
	},
}));

export default useTicketStore;
