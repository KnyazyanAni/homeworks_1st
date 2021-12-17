import useList from "./hooks/use-list";
import { useState} from "react";
import styles from "./app.module.css"


const App = () => {
    const {list} = useList()
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.current.value.toLowerCase())
    }

    return (
        <div className={styles.container}>
            <label> {'Search Todo List'} </label>
            <input placeholder={'Enter title'} className={styles.input} onChange={handleChange}/>
            {value.length ?
                <div>
                    <ol>
                        {list.map((item) => item.title.match(value) &&
                            <li style={{marginBottom: 10}}>
                                <div>{`Title: ${item.title}`}</div>
                                <span>Status: </span>
                                <span
                                    style={{color: item['completed'] ? 'green' : 'red'}}>{item['completed'] ? 'Done!' : 'In progress...'}</span>
                            </li>)}
                    </ol>
                </div> : null
            }
        </div>
    )
}

export default App;