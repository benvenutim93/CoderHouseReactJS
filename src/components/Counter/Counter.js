import React from 'react'
import './Counter.css'

export default function Counter({onAdd, onSubstract, onAddToCart}) {
    return (
        <div className='flex'>
            <button className='btn btn-success' onClick = {onAdd}>+</button>
            <button className='btn btn-danger' onClick = {onSubstract}>-</button>
        </div>
    )
}
