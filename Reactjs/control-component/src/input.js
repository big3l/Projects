import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input onChange={props.onChange}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value} />
            <div className="errorMessage">
                {props.errorMessage}</div>
        </div>
    )
}
