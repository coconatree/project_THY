import { useState } from "react"

export default function FormTextField(props) {
    
    const [helper, setHelper] = useState("");

    const helperMap = {
        "pnr": "Enter tickets PNR number",
        "firstname": "Enter your name",
        "surname": "Enter yor surname"
    }

    const changeHanlerWithHelper = (event) => {
        if (event.target.value != "") {
            setHelper(props.helper)
        }
        else {
            setHelper(helperMap[event.target.name])
        }
        props.handleChange(event)
    }

    return (
        <>
            <input
                type="email"
                name = {props.name}
                class ="
                    form-control
                    block
                    w-full
                    h-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-black
                    text-bold
                    bg-white
                    bg-opacity-80 
                    bg-clip-padding        
                    rounded-md
                    transition
                    ease-in-out
                    focus:bg-opacity-90 
                    focus:text-bold
                    focus:outline-none
                "
                autoComplete="off"           
                value    = {props.value}
                onChange = {event => changeHanlerWithHelper(event)}
                placeholder = {props.placeholder}
            />
            <div class="text-l text-white text-sans text-extrabold ml-1 mt-1">{helper}</div>
        </>
    )
}