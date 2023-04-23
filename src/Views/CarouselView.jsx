import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { load } from '../app/slices/carousel2listSlice'

import Carousel from "../app/components/Carousel/CarouselComponent"

export default () => {
    const carousel2list = useSelector((state) => state.carousel2list.value)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("carousel-page useEffect carousel2list", carousel2list)
        dispatch(load())
    }, []);

    return (
        <div className='carousel-page'>
            <h1>Carousel</h1>
            <Carousel data={carousel2list} />
            
        </div>
    )
}