import create from 'zustand'

const useCustomerStore = create((set) => ({

  firstname: "",
  lastname: "",
  
  setInfo: (firstname, lastname) => set(() => (
    { 
      firstname: firstname,
      lastname:  lastname,
    })),
}))

export default useCustomerStore;