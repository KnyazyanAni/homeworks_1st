import React,{useState,useEffect} from "react";
export default function Component1(){
    const [value,setValue] = useState('');
    const [user,setUser] = useState([]);


    const filtredUser = user.filter(el=>{
        return el.title.toLowerCase().includes(value.toLowerCase())
    })

    const getUser= ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                return response.json();
            })
            .then((response)=>{
                setUser(response)
            })
    }
    useEffect(()=>{
        getUser();
    },[])

    return (
        <div>
            <input onChange={(event)=>setValue(event.target.value)}type="text"></input>
            {filtredUser.map((el,index)=><div key={index}>{el.id}:::{el.title}</div>)}
        </div>
    );
}

