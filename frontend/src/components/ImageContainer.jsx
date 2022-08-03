
import "../static/style/ImageBackground.css"

export default function ImageContainer({children}, props) {

    console.log(children)
    console.log(props.imageUrl)

    return (
        <div className = "image_container">
            <div className = "image_cover">
                <img className = "image" src = {props.imageUrl} alt = {props.alt}/>
                { children }
            </div>
        </div>
    )
}
