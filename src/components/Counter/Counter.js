import React from 'react'

export default function Counter({onAdd, onSubstract}) {
    return (
        <div>
            <button onClick = {onAdd}>+</button>
            <button onClick = {onSubstract}>-</button>
        </div>
    )
}
