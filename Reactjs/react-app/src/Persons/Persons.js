import React from "react";
import "../App.css"

const Persons = (props) => {

    return (
        <div className="person">
            <h1 className = {props.class}>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Job: {props.job}</p>
        </div>
    )
}

export default Persons;