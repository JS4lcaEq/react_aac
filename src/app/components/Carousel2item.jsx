import React, { useState, useEffect } from 'react'

export default (props) => {
    
    const [style2, setStyle2] = useState({marginTop: '260px', marginLeft: '0'});
    const [style, setStyle] = useState({ backgroundImage: 'url("' + props.url + '")' })
    const [isOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(props.index)

    const p = props.text.map((p, index) => <p key={index}>{p}</p>)
    const h = props.head.map((h, index) => <h2 key={index}>{h}</h2>)

    useEffect(() => {
        console.log("useEffect props.offset", props.index, props.offset, props.length);
        let newIndex
        if(props.offset > 0){
            newIndex = index + 1
        }else{
            newIndex = index - 1
        }
        let v = 'visible'
        if (newIndex > 6) {
            newIndex = 0
            v = 'hidden'
        }

        if (newIndex < 0) {
            newIndex = 6
            v = 'hidden'
        }
        setIndex(newIndex)

     
        setStyle({ backgroundImage: 'url("' + props.url + '")' , marginLeft: (newIndex - 1) * 390  + 'px', visibility: v})
        
        
      }, [props.offset]);

    function onClick() {
        if(isOpen) {
            setStyle2({marginTop: '260px'})
        }else{
            setStyle2({marginTop: '150px'})
        }
        setIsOpen(!isOpen)
    }

    return (
        <div className="carousel-item" style={style} onClick={onClick}>
            <div className='debug'>{index} </div>
            <div className="carousel-item-text" style={style2}>
                {h}
                {p}
            </div>
        </div>
    )
}