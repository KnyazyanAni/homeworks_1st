import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: []
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState( {value: e.target.value} )
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then( response => response.json() )
      .then( result => {
        this.setState({data: result})
      })
  }

  render() {
    const {value, data} = this.state;
    const filtredTitles = data.filter( (item) => item.title.includes(value) );
    const titles = filtredTitles.map( (item) => <p key={item.id}>{item.title}</p> );
    return (
      <>
        <input onInput={this.handleInput}/>
        {
          this.state.value !== '' &&
          <div>
            {titles}
          </div>
        }
      </>
    )
  }

}

export default App;


