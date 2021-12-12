import {Component, memo} from "react";

class Header extends Component{

    clickListener = (e) => {
        console.log('Have I clicked on the header ? ', e.target.localName === 'header')
    }

    componentDidMount() {
        document.addEventListener('click', this.clickListener)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.clickListener)
    }

    render() {
        const {color, user} = this.props

        return (
            <header className='header' style={{backgroundColor: color}}>
                Header {user.name}
            </header>
        )
    }
}

export default memo(Header)
