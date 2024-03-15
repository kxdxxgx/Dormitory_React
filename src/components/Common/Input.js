import React from 'react'

export default function Input({ className, value, disabled = false }) {
    return (
        <input className={`border-solid border mt-4 border-gray-300 rounded-lg h-12 p-4 w-2/3 bg-white text-gray-900 font-normal text-base ${className}`}
            value={value}
            disabled={disabled} />
    )
}