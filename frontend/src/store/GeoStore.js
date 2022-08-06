import create from "zustand";

const useGeoStore = create((set) => ({
	geoData: {
		name: "",
		country: "",
		latitude: "",
		longitude: "",
	},
	setGeoInfo: (json) => set((state) => ({ geoData: (state.data = json) })),
}));

export default useGeoStore;
