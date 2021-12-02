import React from 'react'

export default function Counter({onAdd, onSubstract}) {
    return (
        <div className='flex'>
            <button className='btn btn-success' onClick = {onAdd}>+</button>
            <button className='btn btn-danger' onClick = {onSubstract}>-</button>
        </div>
    )
}
