import React from 'react'
import { useState } from 'react/cjs/react.development'

const InputArea = (props) => {
    const [inputText, setInputText] = useState("");

    const handleChange = (event) =>{
        setInputText(event.target.value);
    };

    return (
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText} />
            <button onClick={()=>{
                props.addItems(inputText);
                setInputText("");
                }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea
