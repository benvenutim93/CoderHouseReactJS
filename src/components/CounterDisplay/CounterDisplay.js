import React from 'react'
import './CounterDisplay.css';

export default function CounterDisplay({number}) {
    return (
        <div className="viewer">
            {number}
        </div>
    )
}
