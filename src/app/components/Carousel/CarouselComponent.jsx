import './style.css'
import CarouselItem from './CarouselItem'
import { useState, useEffect } from 'react'

function sort(start, count, props) {
    const ret = []
    for (let i = 0; i < count; ++i) {
        let newI = i + start
        if (newI >= count) newI = newI - count
        ret.push(props.data[newI])
    }
    return ret
}

export default (props) => {
    const duration = 0.5
    const w = 370

    let isBuzzy = false
    let count = props.data ? props.data.length : 0

    const start = { marginLeft: "-" + w * 4 + "px" }
    const left = { marginLeft: "-" + w * 5 + "px", transitionProperty: "margin-left", transitionDuration: duration + "s" }
    const right = { marginLeft: "-" + w * 3 + "px", transitionProperty: "margin-left", transitionDuration: duration + "s" }

    const [step, setStep] = useState(0)
    const [list, setList] = useState(sort(step, count, props))
    const [style, setStyle] = useState(start)
    const [q, setQ] = useState(0)
    const [buzzy, setBuzzy] = useState(false)

    function onLeft() {
        if (!isBuzzy) {
            isBuzzy = true
            setStyle(left)
            setTimeout(() => {
                setStyle(start)
                setList(sort(stepIncrement(), count, props))
                isBuzzy = false
            }, duration * 1000);
        }        
    }


    function onRight() {
        if (!isBuzzy) {
            isBuzzy = true
            setStyle(right)
            setTimeout(() => {
                setStyle(start)
                setList(sort(stepDecrement(), count, props))
                isBuzzy = false
            }, duration * 1000);
        }
    }

    function stepIncrement() {
        let ret = 0
        if (step >= count - 1) { ret = 0 } else { ret = step + 1 }
        setStep(ret)
        return ret
    }

    function stepDecrement() {
        let ret = 0
        if (step <= 0) { ret = count - 1 } else { ret = step - 1 }
        setStep(ret)
        return ret
    }

    const r = list ? list.map(i => <CarouselItem key={i.head} head={i.head} text={i.text} url={i.url} />) : null;

    useEffect(() => {
        console.log("carousel-component useEffect props.data", props.data)
        setList(sort(step, count, props))
    }, [props.data]);

    useEffect(() => {
        console.log("carousel-component useEffect q", q, " buzzy", buzzy)
        if (q > 0) {
            setBuzzy(true)
            const interval = setInterval(() => {
                setQ(q => q - 1);
                setBuzzy(false)
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [q]);

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