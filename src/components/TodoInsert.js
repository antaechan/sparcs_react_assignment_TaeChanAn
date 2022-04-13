import React, { useEffect } from "react"
import { useState } from "react";

const TodoInsert = ({InsertTodo, DeleteTodo}) => {
    
    // const ref = useRef();

    // useEffect( () => {
    //     ref.current.focus();
    // }, []);
    
    
    const [value0, setValue0] = useState("");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");

    const onChange0 = (e) => {
        setValue0(e.target.value)
    }
    const onChange1 = (e) => {
        setValue1(e.target.value)
    }
    const onChange2 = (e) => {
        setValue2(e.target.value)
    }
    const onChange3 = (e) => {
        setValue3(e.target.value)
    }
    const onChange4 = (e) => {
        setValue4(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        InsertTodo(value0, value1, value2, value3, value4);
        
    }

    return (
        <form onSubmit = {onSubmit}>

            <label for = "title">Plz fill different id to each work   </label>
            <input type = "number" name = "id" id = "id" value = {value0} onChange = {onChange0}></input>
            <p></p>

            <label for = "title">Fill in your Todo title   </label>
            <input type = "title" name = "title" id = "title" value = {value1} onChange = {onChange1}></input>
            <p></p>

            <label for = "text">Fill in your Todo text   </label>
            <textarea id="text" name="text" value = {value2} rows="3" cols="40" onChange = {onChange2}></textarea>
            <p></p>

            <label for = "date">Fill in your Todo due   </label>
            <input type = "date" name = "date" id = "date" value = {value3} onChange = {onChange3}></input>
            <p></p>

            <label for = "importance">Fill in your Todo importance by number btw (1~10)   </label>
            <input type = "number" name = "importance" id = "importance" value = {value4} onChange = {onChange4}></input>
            <p></p>

            <button type = "submit">Submit</button>
        </form>
    )
}


export default TodoInsert;