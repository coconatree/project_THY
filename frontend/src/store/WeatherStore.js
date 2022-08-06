import create from "zustand";

const useWeatherStore = create((set) => ({
	weatherData: {
		mainDescription: "",
		description: "",
		iconLink: "",
		temperature: "",
		feelsLikeTemperature: "",
		dayAndHour: "",
	},
	setWeatherInfo: (json) =>
		set((state) => ({ weatherData: (state.data = json) })),
}));

export default useWeatherStore;
