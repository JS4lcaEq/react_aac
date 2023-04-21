import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import slice, { load } from '../app/slices/carousel2listSlice'

export default () => {
    const carousel2list = useSelector((state) => state.carousel2list.value)
    const dispatch = useDispatch()


    return (
        <div className="slice-view">
            <h2>slice-view</h2>
            <p>{JSON.stringify(carousel2list)}</p>
            <button onClick={() => dispatch(slice.actions.set(["setted value"]))}>set</button>
            <button onClick={() => dispatch(load(["loaded value"]))} >load</button>
        </div>
    )
}