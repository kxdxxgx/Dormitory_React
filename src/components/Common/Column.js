// export default function Column({ className, children }) {

//     return <div className={`flex flex-col ${className}`}>{children}</div>
// }

import React from 'react'
import Row from './Row'

export default function Column({ className, children, splitEnabled = true }) {
    const items = React.Children.map(children, (child, index) => {
        if (typeof child === 'string' && splitEnabled) {
            if(child.includes('-')){
                return child
                    .split('-')
                    .map((item, subIndex) => <Row splitEnabled={false} key={`${index}-${subIndex}`}>{item.trim()}</Row>)
            }
            else if(child.includes('enter')){
                return child
                    .split('enter')
                    .map((item, subIndex) => <Row className='mt-0' splitEnabled={false} key={`${index}-${subIndex}`}>{item.trim()}</Row>)
            }
        }

        return child
    })

    return <div className={`flex flex-col ${className}`}>{items}</div>
}