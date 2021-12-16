import { Component } from 'react'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataState: null,
      res: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => this.setState({ dataState: data }))
      .catch(err => console.error(err));
  }

  foo = () => {
    this.state.dataState.map(item => {
      if (document.querySelector('.searchInput').value === item.title) {
        this.setState({ res: [...this.state.res, item] })
      }
    })
  }

  render() {
    console.log(this.state.dataState);
    console.log(this.state.res);
    return (
      <>
        <input className='searchInput'></input>
        <button className='searchButton' onClick={this.foo}>click</button>
        <div className='resultDiv'>{
          this.state.res.map(item => <div key={item.id}>UserId:{item.userId}, Id:{item.id}, Title:{item.title}, Completed:{item.completed}</div>)
        }</div>
      </>
    )
  }
}

export default App;
