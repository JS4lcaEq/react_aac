import { useState } from "react"

export default (props) => {



    const style = { backgroundImage: 'url("' + props.url + '")' }
    const p = props.text.map((p, index) => <p key={index}>{p}</p>)
    const h = props.head.map((h, index) => <h2 key={index}>{h}</h2>)
    const styleOpen = { marginTop: "150px" }
    const styleClose = { marginTop: "260px" }
    const [styleText, setStyleText] = useState(styleClose)
    const [isOpen, setIsOpen] = useState(false)
    const [left, setLeft] = useState(null)

    function onClick() {
        if (isOpen == false) {
            setStyleText(styleOpen)
        } else {
            setStyleText(styleClose)
        }
        setIsOpen(!isOpen)
    }


    return (
        <div className="carousel-item-v3" style={style} onClick={onClick} >
            <div className="carousel-v3-text" style={styleText}>
                {h}
                {p}
            </div>
        </div>
    )
}