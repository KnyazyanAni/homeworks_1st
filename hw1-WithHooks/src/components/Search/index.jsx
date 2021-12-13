import Todo from "./Todo";
import s from "./Search.module.css";
import { useEffect, useState } from "react";

const Search = (props) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

  const toggleCompleted = (e, id) => {
    const tempTodos = todos.map((item) => {
      if (item.id === id) {
        item.completed = e.target.checked;
      }
      return item;
    });
    setTodos(tempTodos);
  };

  const onInutChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={s.container}>
      <div>
        <input
          className={s.input}
          type="text"
          value={inputValue}
          onChange={onInutChange}
          placeholder="Type todo title"
        />
      </div>
      <div>
        {inputValue &&
          [...todos]
            .filter((item) => item.title.includes(inputValue))
            .map((item) => (
              <Todo
                id={item.id}
                title={item.title}
                completed={item.completed}
                toggleCompleted={toggleCompleted}
                key={item.id}
              />
            ))}
      </div>
    </div>
  );
};

export default Search;
