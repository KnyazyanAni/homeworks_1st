import React, {useEffect, useState} from 'react';
import CardItem from "../cardItem/cardItem"

function ToDoList() {
    const [toDoList, settoDoList] = useState([])
    const [filterValue,setFilterValue] = useState("")
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(res => settoDoList(res))
    },[])

    useEffect(() => {
        console.log(filterValue)
        settoDoList(prevtoDoList => prevtoDoList.map(elem => {
            elem.isHidden = !elem.title.includes(filterValue)
            return elem
        }))
    }, [filterValue])

    const handleInputChange = (e) => {
        setFilterValue(e.target.value)

    }

    return (
        <>
        <input type="text" id="searchInfo" onChange={handleInputChange} value={filterValue}/>
            <div className="border"> </div>
        <div className='container'>
        

                {toDoList.map(({title,id,userId,completed,isHidden}) => <CardItem isHidden={isHidden} title={title} id={id} userId={userId} completed={completed}/>)}
        </div>
        
        </>
      
    )
}

export default ToDoList;