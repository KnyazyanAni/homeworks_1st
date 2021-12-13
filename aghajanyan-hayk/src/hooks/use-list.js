import {useEffect, useState} from "react";
import {getTodoList} from "../services/todoList";

const useList = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        getTodoList().then((data) => setList(data))
    }, [])

    return {list}
}

export default useList;