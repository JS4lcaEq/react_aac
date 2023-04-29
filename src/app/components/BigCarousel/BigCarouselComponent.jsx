import './BigCarouselComponent.css'
import { useState, useEffect } from 'react'
let i = 0
let n = 0
let k = 0
let isCurrentUp = true
let currentIndex = 1
let interval
const test = 0
export default (props) => {
    const [test, setTest] = useState("ini")
    // const [currentIndex, setCurrentIndex] = useState(1)
    let m = 0
    const [styleDown, setStyleDown] = useState({ backgroundImage: 'url("/src/assets/c1/1.jpg")', opacity: "1" })
    const [styleUp, setStyleUp] = useState({ backgroundImage: 'url("/src/assets/c1/2.jpg")', opacity: "0" })

    useState(()=>{k++; console.log("big-carousel-component useState", k)})

    function getStyleHidden(style) { return { backgroundImage: style.backgroundImage, opacity: "0" } }
    function getStyleVisible(style) { return { backgroundImage: style.backgroundImage, opacity: "1" } }
    function getStyleImg(style, img) { return { backgroundImage: 'url("/src/assets/c1/' + img + '")', opacity: style.opacity } }

    function showImg(img) {
        if (isCurrentUp) {
            setStyleUp(getStyleVisible(getStyleImg(styleUp, img)))
            setStyleDown(getStyleHidden(styleDown))

        } else {
            setStyleDown(getStyleVisible(getStyleImg(styleDown, img)))
            setStyleUp(getStyleHidden(styleUp))

        }
        // setIsCurrentUp(!isCurrentUp)
        isCurrentUp = !isCurrentUp
    }

    function imageIteration() {
        // setCurrentIndex(currentIndex < props.list.length - 1 ? currentIndex + 1 : 0)
        currentIndex = currentIndex < props.list.length - 1 ? currentIndex + 1 : 0
        return props.list[currentIndex]
    }

    function go() {
        n++
        console.log(n)
        showImg(imageIteration())
    }

    function start () { 
        // interval = setInterval(go, 2000) 
        m++
        const mm = m
        console.log("start m", m, " mm", mm)
        
    }

    useEffect(() => {
        i++
        m++
        if(m == 1){
            interval = setInterval(go, 2000) 
        }
        console.log("big-carousel-component useEffect", i, " m", m)
    }, [])

    return (
        <div className="big-carousel-component">
            <div className='debug'>
                <h2>Debug</h2>
                <p>props:{JSON.stringify(props)}</p>
                <p>styleUp: {JSON.stringify(styleUp)}</p>
                <p>{test}</p>
                <button onClick={start}>go</button>
            </div>
            <div className='down' style={styleDown}>down</div>
            <div className='up' style={styleUp}>up</div>
        </div>
    )
}