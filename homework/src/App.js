import { Component } from "react";

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      items: [],
      value: "",
      chekedClick: false

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=> res.json())
    .then((json) =>{
      this.setState({
      items: json
      })
    })
  }


  handleChange(e){
    this.setState({value: e.target.value, chekedClick: false})
  }

  handleClick(e){
    e.preventDefault()
    this.setState({chekedClick: true})
  }

  render(){
    const {items, value, chekedClick} = this.state
    return <div className="App">
      <form>
        <input type="text" value={value} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}> search </button> 
        <div>
          {            
            chekedClick && (
              items.map(item => {
                if(item.title.includes(value)){
                  return <div
                  key={item.id}
                  >
                    {item.title}                    
                  </div>
                }
              })
            )
          }
        </div>
      </form>
    </div>
      
  }
}

export default App;

