import React, {useState,useEffect} from 'react'

const url = `https://jsonplaceholder.typicode.com/todos`
const FetchFunction = () => {
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
      setData(jsonData)
       
    } catch (e) {
      setIsLoading(false)
      setIsError(true)
      setData([])
      console.log(e)
    }
  }
  useEffect(() => {
    fetchData()
  }, [value])
 
 
 const handelSearch = (e) => {
    e.preventDefault()
   const tempArr = data.filter(item => item.title === value)
   setData(tempArr)
  }
   
    if (isLoading) {
     return <main> Loading...</main>
    } else {
     return (
      <main>  
        <form onSubmit={handelSearch}>
             <input type='text' value={value} placeholder='Search...'
              onChange={(e) => setValue(e.target.value)}
             />
          <button>Find Todo list</button>
          <table>
              <tr>
              <th>N:</th>
              <th>List</th>
               </tr>
               <tbody >
                   {data.map(item => {
            const { id, title } = item
            return (
              <tr key={id}>
                <td>{ id}</td>
                 <td > {title}</td>
              </tr>
              
            )
          }) }
              </tbody>
        
        </table>
        </form>
       
      </main>
    );
    }
   
  }


export default FetchFunction
