import './style.css'
import CarouselItem from './CarouselItem'
import { useState } from 'react'
export default (props) => {

    const count = props.data.length

    function sort(start) {
        const ret = []
        for (let i = 0; i < count; ++i) {
            let newI = i + start
            if (newI >= count) {
                newI = newI - count
            }
            ret.push(props.data[newI])
        }
        return ret
    }

    const w = 370
    const [bussy, setBussy] = useState(false)
    const [step, setStep] = useState(0)
    const [list, setList] = useState(sort(step))

    const start = { marginLeft: "-" + w * 4 + "px" }
    const left = { marginLeft: "-" + w * 5 + "px", transitionProperty: "margin-left", transitionDuration: "0.5s" }
    const right = { marginLeft: "-" + w * 3 + "px", transitionProperty: "margin-left", transitionDuration: "0.5s" }

    const [style, setStyle] = useState(start)

    function onLeft() {
        if (!bussy) {
            setBussy(true)
            setStyle(left)
            setTimeout(() => {
                reset()
                setList(sort(stepIncrement()))
                setBussy(false)
            }, 590);
        }
    }

    function onRight() {
        if (!bussy) {
            setBussy(true)
            setStyle(right)
            setTimeout(() => {
                reset()
                setList(sort(stepDecrement()))
                setBussy(false)
            }, 590);
        }

    }

    function stepIncrement() {
        let ret = 0
        if (step >= count - 1) {
            ret = 0
        } else {
            ret = step + 1
        }
        setStep(ret)
        return ret
    }

    function stepDecrement() {
        let ret = 0
        if (step <= 0) {
            ret = count - 1
        } else {
            ret = step - 1
        }
        setStep(ret)
        return ret
    }

    function reset() {
        setStyle(start)
    }

    const r = list.map(i => <CarouselItem  key={i.head} head={i.head} text={i.text} url={i.url} />)

    return (
        <div className="carousel-component-v3">
            <div className='carousel-left-manual' onClick={onLeft}></div>
            <div className='carousel-right-manual' onClick={onRight}></div>
            <div className='carousel-v3-debug'>count:{count} step:{step}</div>
            <div className='carousel-v3-box'>
                <div className='carousel-line-v3' style={style}>
                    {r}
                </div>
            </div>
        </div>
    )
}