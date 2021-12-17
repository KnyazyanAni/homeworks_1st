import {Component} from "react"

class App extends Component {
  constructor(props){
  super(props);
this.state={
  data:[],
  isChange:false,
           }
 this.handleFilterText=this.handleFilterText.bind(this);

  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((res) => {
      this.setState({ data: res })
    })
}




handleFilterText=(ev)=>{
  let filterValue=ev.target.value;
this.setState({isChange:!this.state.isChange})
   this.state.data.map((item)=>{
     
     item.isHidden=!item.title.includes(filterValue);
     return item;
   }

   )
 

}

  render(){
    return (<>
   <input className="inputTxt" onChange={this.handleFilterText} ></input>
      <div className="container">
      {
        this.state.data.map(item=>{
          return !item.isHidden ? <div key={item.id}
                 id={item.id}
                 className="title"
                 >
              {item.title}
            </div> : null
          
        })
      }
    </div>
    </>
    )
  }
}

export default App;
