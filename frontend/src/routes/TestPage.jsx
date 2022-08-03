
import { useState } from "react"

import ImageContainer from "../components/ImageContainer"

import img1 from "../static/images/bg_image_bangkok.jpg"
import img2 from "../static/images/bg_image_barcelona.jpg"
import img3 from "../static/images/bg_image_berlin.jpg"
import img4 from "../static/images/bg_image_dallas.jpg"
import img5 from "../static/images/bg_image_london.jpg"
import img6 from "../static/images/bg_image_new_york.jpg"
import img7 from "../static/images/bg_image_paris.jpg"
import img8 from "../static/images/bg_image_san_fransisco.jpg"

export default function TestPage() {

    const [state, setState] = useState({
        index: 0,
        images: [img1, img2, img3, img4, img5, img6, img7, img8]
    })

    /**
        Map Version For Future Use !!! 

        images: {
            "bangkok": img1, 
            "barcelona": img2, 
            "berlin": img3, 
            "dallas": img4,
            "london": img5,
            "new_york": img6,
            "paris": img7,
            "san_fransisco": img8,
        }

     */

    function changeImage(e) {
        
        if (state.index == state.images.length) {
            setState({
                index: 0,
                ... state,
            })
        }
        console.log(state.images[state.index])
    }

    return (
        <ImageContainer imageUrl = {state.images[state.index]} alt = "">
            <div>
                <label>Test Page</label>
                <button onClick = {e => changeImage(e)}>Next</button>
            </div>
        </ImageContainer>
    )
}