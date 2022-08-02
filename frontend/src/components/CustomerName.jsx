/**
    This component will display the customer's name if it is present in the state
 */

import useCustomerStore from "../store/CustomerStore"

export default function CustomerName() {

    const {firstname, lastname} = useCustomerStore((state) => (
        {
            firstname: state.firstname,
            lastname:  state.lastname
        }
    ))

    return (
        <>

        </>
    )
}