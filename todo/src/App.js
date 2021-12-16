import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => {
        this.setState({
          todos: todos,
        });
      });
  }

  onChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  render() {
    const { todos, searchText } = this.state;

    return (
      <div className="App">
        <div>
          <input type={"text"} onChange={this.onChange} />
        </div>

        {todos
          .filter((todo) => {
            return todo.title.includes(searchText);
          })
          .map((todo) => {
            return <div key={todo.id}>{todo.title}</div>;
          })}
      </div>
    );
  }
}

export default App;
