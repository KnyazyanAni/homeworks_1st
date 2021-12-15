import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [toDos, setToDos] = useState([]);
  const [isShowable, setIsShowable] = useState(false);
  let textInput = React.createRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  const handleSearch = () => {
    const a = textInput.current.value;
    if (a) {
      let b = data
        .filter((el) => el.title.toLowerCase().includes(a.toLowerCase()))
        .map((el) => {
          return <div key={el.id}>{el.title}</div>;
        });
      console.log(b);
      setToDos(b);
      setIsShowable(true);
    } else {
      setIsShowable(false);
    }
  };
  const handleChange = (e) => {
    if (e.target.value) {
      let b = data
        .filter((el) =>
          el.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
        .map((el) => {
          return <div key={el.id}>{el.title}</div>;
        });
      setToDos(b);
      setIsShowable(true);
    } else {
      setIsShowable(false);
    }
  };
  return (
    <>
      <div className="input-group">
        <input
          ref={textInput}
          type="search"
          className="form-control"
          onChange={handleChange}
        ></input>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {isShowable && <span>{toDos}</span>}
    </>
  );
}

export default App;
