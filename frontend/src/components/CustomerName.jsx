/**
    This component will display the customer's name if it is present in the state
 */

import useCustomerStore from "../store/CustomerStore"

export default function CustomerName() {

    const {firstName, lastName} = useCustomerStore((state) => (
        {
            firstName: state.firstName,
            lastName:  state.lastName
        }
    ))

    return (
        <>

        </>
    )
}