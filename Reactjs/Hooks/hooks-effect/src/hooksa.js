import React, { useState, useEffect } from 'react';

let postUrl = 'https://jsonplaceholder.typicode.com/posts';
let usersUrl = 'https://jsonplaceholder.typicode.com/users';

export default function Posts() {
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([])

    async function fetchData(url, saveTo) {
        const response = await fetch(url)
        response.json()
            .then(response => saveTo(response.slice(0, 5)))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData(postUrl, setData)
        fetchData(usersUrl, setUsers)
    }, [])

    console.log(data);
    console.log('users : ', users);

    let user_array = ['Romal', 'Sergey', 'Wisam', 'Peter'];
    let userName = '';

    let allData = data.map((item) => {
        userName = users.map((user) => {
            if (user.id === item.userId) {
                return user.name
            }
        })

        return <div className="card card-1" key={item.id}>
            <span>The user ID is : {item.id}</span>
            <h4>Title: {item.title}</h4>
            <h4>Written by {userName}</h4>
            <p> Body: {item.body}</p>
            <h5>The user is: {user_array[item.userId]}</h5>
        </div>
    })

    let moreData = users.map((item) => {
        return <div className="card card-1" key={item.id}>
            <h3>Personal Business Card </h3>
            <h4>name: {item.name}</h4>
            <h4>website: {item.website}</h4>
            <h4>email: {item.email}</h4>
        </div>
    })

    return (
        <div className='App'>
            <h1>The Posts : </h1>
            {allData},{moreData}
        </div>
    )
}