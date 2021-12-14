import { Component } from "react"
import SearchWithButton from "./components/SearchWithButton/SearchWithButton";
import SearchWithoutButton from "./components/SearchWithoutButton/SearchWithoutButton"




class App extends Component {
  constructor(){
    super()
  }

  // componentDidMount(){
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState({ initialTodos: json })
  //   })
    
  // }
  

  render(){
      return (
          <div className="App">
              <SearchWithoutButton />
              <div className="divider"></div>
              <SearchWithButton />
          </div>
        )
      }
}

export default App;
