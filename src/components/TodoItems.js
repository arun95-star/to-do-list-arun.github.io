import React from 'react'

const TodoItems = (props) => {
    return (
        <div>
            <li>{props.text}</li>
            <button onClick={()=>props.deleteItem(props.id)}>X</button>
        </div>
    )
}

export default TodoItems
