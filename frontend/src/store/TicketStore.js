import create from "zustand";

const useTicketStore = create((set) => ({
	data: {
		pnr: "",
		firstname: "",
		lastname: "",
		departureCityName: "",
		arrivalCityName: "",
		arrivalCityLatitude: "",
		arrivalCityLongitude: "",
		isLogged: false,
	},
	setTicketInfo: (json) =>
		set((state) => ({ ticketData: (state.data = json) })),
}));

export default useTicketStore;
