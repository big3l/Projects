import React from 'react';




const InputTodo = (props) => {
    return (
        <div>
            <input type='text' placeholder='Add new task to do ...'
                value={props.todoValue}
                onChange={(e) => props.changed(e)}/> 
            <div className="errorMessage">{props.errorMessage}</div>
        </div>
    )
}

export default InputTodo;