import { Component } from "react";
import Todo from "./Todo";
import s from "./Search.module.css";

class Search extends Component {
  state = {
    todos: [],
    inputValue: "",
  };

  toggleCompleted = (e, id) => {
    const tempTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = e.target.checked;
      }
      return item;
    });
    this.setState({
      todos: tempTodos,
    });
  };

  onInutChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          todos: [...data],
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={s.container}>
        <div>
          <input
            className={s.input}
            type="text"
            value={this.state.inputValue}
            onChange={this.onInutChange}
            placeholder="Type todo title"
          />
        </div>
        <div>
          {this.state.inputValue &&
            [...this.state.todos]
              .filter((item) => item.title.includes(this.state.inputValue.trim()))
              .map((item) => (
                <Todo
                  id={item.id}
                  title={item.title}
                  completed={item.completed}
                  toggleCompleted={this.toggleCompleted}
                  key={item.id}
                />
              ))}
        </div>
      </div>
    );
  }
}

export default Search;
