import create from 'zustand'

const useTicketStore = create((set) => ({
  
  pnr: "",
  firstname: "",
  lastname: "",
  departureCityName: "",
  arrivalCityName: "",
  arrivalCityLatitude: "",
  arrivalCityLongitude: "",
  isLogged: false,

  setTicketInfo: ({
    pnr,
    firstname,
    lastname,
    departureCityName,
    arrivalCityName,
    arrivalCityLatitude,
    arrivalCityLongitude,
    isLogged,
  }) => set(() => (
    { 
      pnr: pnr,
      firstname: firstname,
      lastname: lastname,
      departureCityName: departureCityName,
      arrivalCityName: arrivalCityName,
      arrivalCityLatitude: arrivalCityLatitude,
      arrivalCityLongitude: arrivalCityLongitude,
      isLogged: isLogged,
    })),
}))

export default useTicketStore;