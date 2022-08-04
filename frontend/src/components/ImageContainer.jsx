
import "../static/style/ImageBackground.css"

export default function ImageContainer(props, {children}) {

    console.log(`URL ${props.url}`)

    return (
        <div className = "image_container">
            <div className = "image_cover">
                <img className = "image" src = {props.url} style={{width: '100%', height: '100%'}}/>
                { children }
            </div>
        </div>
    )
}
