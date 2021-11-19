import React from 'react'

export default function Counter({onAdd, onSubstract}) {
    return (
        <div className='flex mx-5'>
            <button className='border-2 border-green bg-green-600 rounded-lg w-12 text-white' onClick = {onAdd}>+</button>
            <button className='border-2 border-red bg-red-600 rounded-lg w-12 text-white' onClick = {onSubstract}>-</button>
        </div>
    )
}
