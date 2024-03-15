import React from 'react'

export default function Grid(props) {
    return <div className="grid grid-cols-12 h-auto pt-32">{props.children}</div>
}
