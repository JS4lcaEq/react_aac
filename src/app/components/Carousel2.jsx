import { useState } from 'react';
import CarouselItem from "./Carousel2item"
export default (props) => {
    const [offset, setOffset] = useState(0)
    const listItems = props.list.map((item, index) =>
        <CarouselItem key={item.url} head={item.head} url={item.url} text={item.text} index={index} length={props.list.length} offset={offset} />
    )
    const count = props.list.length

    function onPlus() {
        let offset_ = offset
        if (offset_ < 0) offset_ = - offset_
        setOffset(offset_ + 1)
    }

    function onMinus() {
        let offset_ = offset
        if (offset > 0) offset_ = - offset_
        setOffset(offset_ - 1)
    }

    return (
        <div className="carousel-box">
            <div className='manual'>{count}
                <button onClick={onPlus}>+</button>
                <button onClick={onMinus}>-</button>
                {offset} {props.list.length}
            </div>
            {listItems}
        </div>
    )
}