import React, { useState, useEffect } from 'react'

export default function AppHooks() {
    const [personInfo, setPersonInfo] = useState([]);
    useEffect(() => {
        let initialPersonInfos = [];
        fetch('https://swapi.co/api/people/')
            .then(res => res.json())
            .then(data => {
                initialPersonInfos = data.results;
                console.log('Star Wars hooks - initialPersonInfos :', initialPersonInfos)
                setPersonInfo(initialPersonInfos)
            })
    }, [])

    let allData = personInfo.map((items) => {
        return (<div className='card card-1' key={items.id}>
            <p>Person Name: {items.name} </p>
            <p>Person Gender: {items.gender} </p>
            <p>Person Homeworld: {items.homeworld} </p>
            <p>Person D.O.B: {items.birth_year} </p>
        </div>
        )
    })


    return (
        <div className='App'>
            <h1>Star Wars Hooks</h1>
            <ul>{allData}</ul>
        </div>
    )
}
