import React from 'react'

export default function InputField(props) {
    return (
        <div className= 'App'>
            <input type= 'text' onChange = {props.change}/>
            <button onClick = {props.click}>Search Videos</button>
        </div>
    )
}
