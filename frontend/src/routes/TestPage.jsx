
import useImageStore from "../store/ImageStore"

import ImageContainer from "../components/ImageContainer"
import { useEffect, useState } from "react"

export default function TestPage() {

    const {bangkok, barselona, berlin, dallas, london, new_york, paris, san_fransisco, reservation_page} = useImageStore(
        (state) => ({ 
            bangkok: state.bangkok, 
            barselona: state.barselona,
            berlin: state.berlin,
            dallas: state.dallas,
            london: state.london,
            new_york: state.new_york,
            paris: state.paris,
            san_fransisco: state.san_fransisco,
            reservation_page: state.reservation_page,
        }),
      )

    useEffect(() => console.log(bangkok), [])

    return (
        <ImageContainer url = {bangkok}>
            <div>
                <label>Test Page</label>
            </div>
        </ImageContainer>
    )
}