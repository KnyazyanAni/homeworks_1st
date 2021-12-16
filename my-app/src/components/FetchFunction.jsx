import React, {useState, useEffect} from 'react'

const url = `https://jsonplaceholder.typicode.com/todos`
const FetchFunction = () => {
    const [list, setList] = useState([])
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const fetchData = async () => {
        try {
            const fetchData = await fetch(url)
            if (!fetchData.ok) {
                throw new Error(`HTTP error! status: ${fetchData.status}`);
            }
            const jsonData = await fetchData.json()
            setIsLoading(false)
            setIsError(false)
            setList(jsonData)

        } catch (e) {
            setIsLoading(false)
            setIsError(true)
            setList([])
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
            .then(() => {
                setData(list)
            })
    }, [])

    // useEffect(() => {

    //      const filterArr = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
    //     setData(filterArr)
    // },[value])

    const handelSearch = (e) => {
        e.preventDefault()
        if (!value) {
            return data
        }
        const tempArr = data.filter(item => item.title === value)
        setData(tempArr)
    }
    const handelChange = (e) => {
        const el = e.target.value
        const filterArr = list.filter(item => item.title.toLowerCase().includes(el.toLowerCase()))
        setValue(el)
        setData(filterArr)
    }

//render UI
    if (isLoading) {
        return <main> Loading...</main>
    }
    if (isError) {
        return (
            <div className='errorContainer'>
                <h1 style={{color: 'red'}}>HTTP error! status:404 </h1>
            </div>
        )
    } else {
        return (
            <main>
                <form onSubmit={handelSearch}>
                    <input type='text' value={value} placeholder='Search...'
                           onChange={handelChange}
                    />
                    <button>Find Todo list</button>
                    <table>
                        <thead>
                        <tr>
                            <th>N:</th>
                            <th>List</th>
                            <th>Completed</th>
                        </tr>
                        </thead>

                        <tbody>
                        {data.map(item => {
                            const {id, title, completed} = item
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td> {title}</td>
                                    {completed ? <td> true</td> : <td> false</td>}
                                </tr>
                            )
                        })}
                        </tbody>

                    </table>
                </form>

            </main>
        );
    }

}


export default FetchFunction
