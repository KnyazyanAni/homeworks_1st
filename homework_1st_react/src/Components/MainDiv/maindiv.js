import React, {Component } from 'react';
import Button from '../Button/button';
import Input from'../Input/input';
import TextResult from '../TextResult/textResult';
import Label from '../Input/label';


class MainDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:'',
            data:[]
          }
         

     };
     handleInput=(e)=>{
         this.setState({value:e.target.value})
     }

     handleFind=()=>{
         fetch('https://jsonplaceholder.typicode.com/todos')
         .then(response => response.json())
         .then(result=>{
             this.setState({data:result})
             console.log(result);
            })
        .catch(reject=>console.log(reject))
    }

    
    render(){
        const {value, data} = this.state;
        const filteredTitles=data.filter((item)=>item.title.includes(value));
        let titles = filteredTitles.map((item)=><p key = {item.id}>{item.title}</p>)
        return(
            <div id='mainDiv'>
                <Label/>
                <div id='divSearch'>
                    <Input value={this.searchValue} onChange={this.handleInput} />
                    <Button onClick={this.handleFind} style = {{marginLeft:"5%"}}>Create todo list</Button>
                    
                    
                </div>
                
                <TextResult> {titles}</TextResult>

            </div>
              )
    }
}
export default MainDiv





