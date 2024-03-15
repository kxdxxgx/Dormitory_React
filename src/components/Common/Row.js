// export default function Row({ className, data = '', children }) {
//     const items =
//         typeof children === 'string' ? (
//             children.split('/').map((item, index) => <div key={index}>{item.trim()}</div>)
//         ) : Array.isArray(children) ? (
//             children.map((child, index) => <div key={index}>{child}</div>)
//         ) : data.includes(',') ? (
//             data.split(',').map((item, index) => <div key={index}>{item.trim()}</div>)
//         ) : (
//             <div>{data}</div>
//         )
//     return <div className={`flex justify-between mt-4 ${className}`}>{items}</div>
// }
import React from 'react'

export default function Row({ className, children, splitEnabled = true }) {
    const items = React.Children.map(children, (child, index) => {
        if (typeof child === 'string' && splitEnabled) {
            return child.split('/').map((item, subIndex) => <div key={`${index}-${subIndex}`}>{item.trim()}</div>)
        }
        return child
    })

    return <div className={`flex flex-row justify-between mt-4 ${className || ''}`}>{items}</div>
}

// export default function Row({ className, children, splitSlashEnabled = true, splitDashEnabled = true }) {
//     const items = React.Children.map(children, (child, index) => {
//         if (typeof child === 'string') {
//             const parts = splitSlashEnabled
//                 ? child.split('/').map((part, subIndex) =>
//                     splitDashEnabled
//                         ? part.split('-').map((subPart, subSubIndex) =>
//                             <div key={`${index}-${subIndex}-${subSubIndex}`} style={{ paddingTop: subSubIndex !== 0 ? '2em' : '0' }}>
//                                 {subPart.trim()}
//                             </div>
//                         )
//                         : <div key={`${index}-${subIndex}`} style={{ paddingTop: subIndex !== 0 ? '2em' : '0' }}>
//                             {part.trim()}
//                         </div>
//                 )
//                 : child.split('-').map((part, subIndex) =>
//                     <div key={`${index}-${subIndex}`} style={{ paddingTop: subIndex !== 0 ? '2em' : '0' }}>
//                         {part.trim()}
//                     </div>
//                 );
//             return parts;
//         }
//         return child;
//     });

//     return <div className={`flex flex-row justify-between mt-4 ${className || ''}`}>{items}</div>
// }
