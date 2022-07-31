import { useEffect, useState } from "react";

export default function MemberList() {

    const [componentState, setComponentState] = useState({
        isLoading: true,
        hasError: false,
    })

    const [memberList, setMemberList] = useState(null);

    useEffect(() => {

        async function fetchMemberList() {
            
            let response = await fetch("http://localhost:8080/api/test/")
            
            if (!response.ok) {
                setComponentState({
                    isLoading: false,
                    hasError: true,
                })
            }

            let json = await response.json()

            if (!json) {
                setComponentState({
                    isLoading: false,
                    hasError: true,
                })
                return
            }

            setMemberList(json)
            setComponentState({
                isLoading: false,
                hasError: false 
            })
        } 
        fetchMemberList()
    }, []);

    function createMemberList() {
        return memberList.map(member => {
            return (
                <div>
                    <h3>{member.name}</h3>
                </div>
            )
        })
    }

    function validateAndCreateMemberList() {
        
        if (componentState.isLoading) {
            return (
                <div>
                    <h3>Loading ...</h3>
                </div>
            )
        }

        if (componentState.hasError) {
            return (
                <div>
                    <h3>Error ...</h3>
                </div>
            )
        }

        return createMemberList()
    }

    return (
        <div>  
            <h2>Member List</h2>
            <hr/>
            { validateAndCreateMemberList() }        
        </div>
    ) 
}
