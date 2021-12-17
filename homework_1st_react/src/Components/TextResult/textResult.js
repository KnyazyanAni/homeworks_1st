import React, {Component } from 'react';


class TextResult extends Component{
    render(){
        return(
            <p className='textResult' style={this.props.style}>{this.props.children}</p>
        )
    }
}
export default TextResult