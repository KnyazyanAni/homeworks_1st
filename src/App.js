import {Component} from "react"

class App extends Component {
  constructor(props){
  super(props);
this.state={
  toDoArr:[]
}

  }

  
addToDoes(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>res.json())
.then(result=>{
  
})

}


  render(){
    return (
      <div>
      <input ></input>
        111111
      </div>
    )
  }
}

export default App;
