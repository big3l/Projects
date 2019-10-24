import React from 'react'

export default function Header(props) {
    
    return (
        <div className='header'>
            <header >UserSearch</header>
            <span onClick = {() => props.navigationHandler('Search')}>Search</span>
            <span onClick = {() => props.navigationHandler('About')}>About</span>
        </div>
    )
}
