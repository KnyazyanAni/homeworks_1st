import React, {useState} from 'react';
import useTodoList from "./hooks/use-todo-list";
import {searchResult} from "../../index.css"

function TodoList() {

    const [value, setValue] = useState("")
    const {list, loading} = useTodoList()

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    if (loading) {
        return (
            <div>...Loading</div>
        )

    }

    return (
        <div className="inputArea">
            <input type="text" onChange={handleChange}/>
            {value && list && list.map((item) => {
                if (item.title.match(value)) {
                    return <div key={item.id}
                                className="searchResult">{`${item.title}  ===>  ${item["completed"]}`}</div>
                }
            })}


        </div>
    );
}

export default TodoList
