import React, {Component } from 'react';


class Button extends Component{
    render(){
        return(
            <button className='buttonName' style={this.props.style} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}
export default Button