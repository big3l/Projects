import React from 'react'

export default function CounterOutput(props) {
    return (
        <div className='CounterOutput' >
            Current Counter : {props.value}
        </div>
    )
}
