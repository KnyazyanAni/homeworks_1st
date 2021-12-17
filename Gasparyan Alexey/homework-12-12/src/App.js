import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      data: [],
      value: ''  
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(result => this.setState({data: result}))    
  }  

  changeHandler = (e) => {   
    this.setState({value: e.target.value})
    // ---------------------------------------------
    // Եթե պետք լինի search-ը աշխատացնել 3 նիշից հետո պետք է գրել comment-ի կոդը
    // ---------------------------------------------
    // if(e.target.value.length > 3){
    //   this.setState({value: e.target.value})
    // }else{
    //   this.setState({value: ''})
    // }    
  }

  render(){
    const {data, value} = this.state     
    return (
      <div className="container">
        <input 
          type='text'
          onChange={this.changeHandler}
          className="input"
        ></input>
        <div className="founded">
        {
          data.map(item => {
            if(item.title.includes(value)){
              return (
                value && <div key={item.id}>
                  <span>User{item.userId}</span>
                  <span>{item.id}</span>
                  <span>{item.title}</span>
                  <input type="checkbox" defaultChecked={item.completed}></input>                  
                </div>                  
              )
            }            
          })
        }
        </div>
      </div>
    )
  }

}

export default App;
