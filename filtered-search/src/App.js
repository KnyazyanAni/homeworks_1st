import React , {Component} from 'react';
import './App.css';


//With Button Version
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      result: [],
      inpVal: ''
    }
  }
  onTodoChange = (e) =>{
    this.setState({inpVal: e.target.value})
   
}
  handleClick = () =>{
    if(this.state.inpVal){
      this.setState(
        {result: this.state.todos.filter((val)=>{
          if(val.title.includes(this.state.inpVal)){
            return val;
          }
        })
      })  
    }else{
      this.setState({result: this.state.todos}) 
    }
    
  }
  
  componentDidMount(){
    {fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) =>  res.json())
      .then((res) => {
        this.setState({todos: res})
        this.setState({result: res})
      })
      .catch((err) => console.log(err))
    }
  }

  render(){
    const {inpVal,result} = this.state
    return (
      <div className = 'container'>
        <input placeholder = "Type something..." type = 'text' id="inp" value = {inpVal}  onChange={this.onTodoChange} />
        <button onClick = {this.handleClick}>Search</button>
        
        {result.map((item) => {
          return(
            <p key = {item.id}><strong>Title:</strong> {item.title}</p>
          )
        })}
        
      </div>
    )
  }
 
}
export default App;

//Without Button Version
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       todos: [],
//       inpVal: ''
//     }
//   }
//   onTodoChange = (e) =>{
//     this.setState({inpVal: e.target.value})
   
// }
 
//   componentDidMount(){
//     {fetch('https://jsonplaceholder.typicode.com/todos')
//       .then((res) =>  res.json())
//       .then((res) => {this.setState({todos: res})})
//       .catch((err) => console.log(err))
//     }
//   }

//   render(){
//     const {todos,inpVal} = this.state;
//     return (
//       <div className = 'container'>
//         <input placeholder = "Type something..." type = 'text' id="inp" value = {inpVal}  onChange={this.onTodoChange} />
        
//         {todos
//               .filter((val)=>{
//                 if(inpVal === ""){
//                   return val;
//                }else if(val.title.includes(inpVal)){
//                   return val;
//                 }
//               }) 
//               .map((item) => {
//                   return <p key = {item.id}><strong>Title:</strong> {item.title}</p>
//               })
//         }
          
//       </div>
//     )
//   }
 
// }

// export default App;

