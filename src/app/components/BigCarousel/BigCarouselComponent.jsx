import './BigCarouselComponent.css'
import { useState, useEffect } from 'react'

export default (props) => {

    const [step, setStep] = useState([
        0, 
        true, 
        { backgroundImage: 'url("' + props.preffix + props.list[0] + '")', opacity: "1"}, 
        { backgroundImage: 'url("' + props.preffix + props.list[1] + '")', opacity: "0"}
    ])

    useEffect(() => {
        const index = setInterval(() => {
            setStep(val => {
                let index = val[0] + 1
                if(index >= props.list.length) index = 0
                const odd = !val[1]
                let up = val[2]
                let down = val[3]
                if(odd){
                    up = { backgroundImage: 'url("' + props.preffix + props.list[index] + '")', opacity: "1"}
                    down = {backgroundImage : val[3].backgroundImage, opacity: "0"}
                }else{
                    down = { backgroundImage: 'url("' + props.preffix + props.list[index] + '")', opacity: "1"}
                    up = {backgroundImage : val[2].backgroundImage, opacity: "0"}
                }
                return [index, odd, up, down]
            })
        }, 3000)
        return () => clearInterval(index)
    }, [])

    return (
        <div className="big-carousel-component">
            <div className='debug'>
                <h2>Debug </h2>
                <p>props:{JSON.stringify(props)}</p>
                <p>step = {JSON.stringify(step)}</p>
            </div>
            
            <div className='down' style={step[3]}>down</div>
            <div className='up' style={step[2]}>up</div>
            <div className='shadow'>
                <h2>Ultimate Automotive Analytics</h2>
                <h3>Be aware. Be ahead.</h3>
            </div>
            
        </div>
    )
}