import React, { Component } from 'react';

const url = `https://jsonplaceholder.typicode.com/todos`
// const url = `https://jsonplaceholder.typicode.com/users`
class FetchClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value:'',
      isLoading: true,
      isError: false,
     errorText:''
    }
  }
  fetchData = async () => {
    try {
      const fetchData = await fetch(url)
       if (!fetchData.ok) {
         throw new Error(`HTTP error! status: ${fetchData.status}`);
      }
      const jsonData = await fetchData.json()
       this.setState({isLoading:false, isError:false, data:jsonData})
    } catch(e) {
      this.setState({ isLoading: false, isError: true, data: [], errorText:e })
      console.log(e)
    }
   
  }
  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
    console.log('state has changed.')
  }
 }
  handelSearch = (e) => {
    e.preventDefault()
    const tempArr = this.state.data.filter(item => item.title === this.state.value)
    this.setState({data:tempArr})
  }
   
  render() { 
    const { data, value, errorText } = this.state
    
    if (this.state.isLoading) {
     return <main> Loading...</main>
    }if (this.state.isError) {
      return (
        <div className='errorContainer'>
          <h1 style={{ color: 'red', textAlign: 'center' }}>HTTP error! status:404 </h1>
          {console.log("errorText -----------", errorText)}
        </div>
      )
     
    }else {
     return (
      <main>  
        <form onSubmit={this.handelSearch}>
             <input type='text' value={value} placeholder='Search...'
              onChange={(e) => this.setState({value:e.target.value})}
             />
          <button>Find Todo list</button>
           <table>
             <thead>
               <tr>
                <th>N:</th>
                <th>List</th>
               </tr>
             </thead>
             
               <tbody >
                   {data.map(item => {
            const { id, title } = item
            return (
              <tr key={id}>
                <td>{ id}</td>
                 <td > {title}</td>
              </tr>
              
            )
          }) }
              </tbody>
        
        </table>
        </form>
       
      </main>
    );
    }
   
  }
}
 
export default FetchClass;