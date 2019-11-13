import React, { useState, useEffect } from 'react';

export default function Photos() {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/')
        response.json()
            .then(response => setData(response.slice(0,9)))
            .catch(err => console.log(err))
    }

    useEffect(() => { fetchData() }, [])

    console.log(data);

    let allData = data.map((item) => {
        return <li key={item.id}>
            <img src={item.url} alt='img' />
        </li>
    })

    return (
        <div className='App'>
            <h1>The Photos : </h1>
            <ul>
                {allData}
            </ul>
        </div>
    )
}
