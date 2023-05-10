import './style.css'
import CarouselItem from './CarouselItem'
import { useState, useEffect, useLayoutEffect } from 'react'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function sort(start, count, props) {
    const ret = []
    for (let i = 0; i < count; ++i) {
        let newI = i + start
        if (newI >= count) newI = newI - count
        ret.push(props.data[newI])
    }
    return ret
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            const w = window.innerWidth
            const h = window.innerHeight
            const n = Math.trunc(w / 370)
            const more = w - n * 370
            const isOdd = n % 2 == 0
            let ws = 0
            if (isOdd) {
                ws =  more / 2 + 370 / 2 
            } else {
                ws = more / 2 
            }
            if(ws < 50) ws = ws + 370
            if(n < 2){
                ws = 50
            }
            const widthStyle = { width: ws + "px" }
            setSize([w, h, n, more, isOdd, widthStyle]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default (props) => {

    const [width, height, numberOfVisibleElements, more, isOdd, widthStyle] = useWindowSize();
    const duration = 0.5
    const w = 370

    let isBuzzy = false
    let count = props.data ? props.data.length : 0

    const start = { marginLeft: "-" + (w * 4.5 + 3) + "px" }
    const left = { marginLeft: "-" + (w * 5.5 + 3) + "px", transitionProperty: "margin-left", transitionDuration: duration + "s" }
    const right = { marginLeft: "-" + (w * 3.5 + 3) + "px", transitionProperty: "margin-left", transitionDuration: duration + "s" }

    const manuaWidth = widthStyle

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

    return (
        <div className="carousel-component-v3">
            <div className='carousel-left-manual' onClick={onLeft} style={manuaWidth}><ArrowBackIosNewIcon sx={{ fontSize: 40 }} /></div>
            <div className='carousel-right-manual' onClick={onRight} style={manuaWidth}><ArrowForwardIosIcon sx={{ fontSize: 40 }} /></div>
            <div className='carousel-v3-debug'>count:{count} step:{step} width:{width}, height:{height} n:{numberOfVisibleElements} isOdd:{isOdd} m: {more} widthStyle: {JSON.stringify(widthStyle)}</div>
            <div className='carousel-v3-box'>
                <div className='carousel-line-v3' style={style}>
                    {r}
                </div>
            </div>
        </div>
    )
}