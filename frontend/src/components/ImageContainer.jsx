
import "../static/style/ImageBackground.css"

export default function ImageContainer({children}, props) {

    return (
        <div className = "image_container">
            <div className = "image_cover">
                <img className = "image" src = {props.imageUrl} alt = ""/>
                { children }
            </div>
        </div>
    )
}
