import React, {Component } from 'react';
class Input extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
        <input  value = {this.props.value} onChange={this.props.onChange} type="text" id='input'/>
        )
    }
}

export default Input