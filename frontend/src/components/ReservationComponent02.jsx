import { useState } from "react";

import useTicketStore from "../store/TicketStore"

import FormTextField from "./FormTextFiled";

export default function ReservationComponent02() {

    const setTicketInfo = useTicketStore((state => state.setTicketInfo))    
    const state         = useTicketStore((state) => state)


    const [formData, setFormData] = useState({
        pnr: "",
        firstname: "",
        surname: "",
    })

    const [helperText, setHelperText] = useState({
        pnr: "",
        first: "",
        surname: "",
    })

    const retrieveData = () => {}
    const setStateData = () => {}

    const handleChange = (event) => {

        if (event.target.value != "") {
            setHelperText({
                [event.target.name]: event.target.name,  
                ... helperText
            })
        } else {
            setHelperText({
                [event.target.name]: "",
                ... helperText
            })
        }

        setFormData({  ...formData, [event.target.name]: event.target.value });
    }

    return (
        <div className ="
            mt-2
            pt-2
            mr-7
            ml-7
            flex
            flex-col
            justify-start
            shadow-white
            h-full
            xl:flex-row
            xl:m-16
            xl:mt-5
            lg:bg-[#171a1b]
            xl:bg-opacity-90
            xl:p-5
            xl:rounded-md 
            xl:h-32
            lg:w-2/3
            lg:justify-center   
            lg:h-2/5
            lg:p-10 
            "
        >
            <div className ="
                mb-5 
                p-2 
                h-16 
                w-full 
                shadow-white
                lg:w-6/2
                xl:w-4/12
                "
            >
                <FormTextField
                    name = "pnr"
                    placeholder = "PNR Number"
                    helper   = "PNR"
                    value    = {formData.pnr}
                    handleChange = {handleChange}
                />
            </div>
            <div className ="
                mb-5 
                p-2 
                h-16 
                w-full 
                shadow-white
                lg:w-6/2
                xl:w-4/12
                "
            >
                <FormTextField
                    name = "firstname"
                    placeholder = "Name"
                    helper   = "Name"
                    value    = {formData.firstname}
                    handleChange = {handleChange}
                />
            </div>
            <div className ="
                mb-5 
                p-2 
                h-16 
                w-full 
                shadow-white
                lg:w-6/2
                xl:w-4/12
                "
            >
                <FormTextField
                    name = "surname"
                    placeholder = "Surname"
                    helper   = "Surname"
                    value    = {formData.surname}
                    handleChange = {handleChange}
                />
            </div>
            <div className ="
                p-2
                h-16 
                w-full 
                flex 
                justify-center 
                shadow-white
                lg:w-6/2
                xl:w-4/12
                "
            >
                <button className ="
                    w-full
                    bg-[#df0d0d]
                    rounded-md
                    p-2
                    text-white
                    text-bold
                    font-sans
                    text-lg
                    shadow
                "
                > 
                    Boost
                </button>
            </div>
        </div>
    )
}


