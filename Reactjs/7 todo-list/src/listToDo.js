import React from 'react';


const ListToDo = (props) => {
    let listOfItems;
    if (props.list.length > 0) {
        listOfItems = props.list.map((item, index) =>
            <h1 onClick = {() => props.remove(index)} key={index}>{item}</h1>
         ) }
    else {
        listOfItems = <p>Add another task below</p>
    }
    return (
        <div>
            {listOfItems}
        </div>
    )
    
}

export default ListToDo;
