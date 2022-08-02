import create from 'zustand'

const useCityStore = create((set) => ({

  cityName: "",
  latitue: "",
  longitude: "",
  
  setCity: (cityName, latitude, longitude) => set((state) => (
    { 
      cityName: cityName,
      latitude: latitude,
      longitude: longitude
    })),
}))

export default useCityStore;