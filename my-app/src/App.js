import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [inputInfo, setInputInfo] = useState('')
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => resp.json()).then((data) => setData(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = data.filter((el) => el.title.includes(inputInfo));
    setData(filtered);
    setInputInfo('')
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input placeholder='Search' value={inputInfo} onChange={(e) => setInputInfo(e.target.value)} />
        <button type='submit'>Find</button>
      </form>
      <div>
        {data.map((item, index) => (
          <div key={index} className="card">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
