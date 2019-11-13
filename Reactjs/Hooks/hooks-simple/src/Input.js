import React, { useState } from 'react'

export default function Input() {
    const [value, setValue] = useState('');

    return (
        <div className="App">
            <form onSubmit={(e) => { e.preventDefault(); setValue(e.target.value) }}>
                <label>Please write your name here </label>
                <input onChange= {(e) => setValue(e.target.value)} type="text" placeholder='Type your name' />
            </form>
            <p>Your name is: {value}</p>
        </div>
    )
}
