import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

