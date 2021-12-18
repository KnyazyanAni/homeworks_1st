import {Component, memo, useEffect} from "react";

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

const Header1 = ({color, user}) => {
    useEffect(() => {
        document.addEventListener('click', clickListener)
        return () => {
            document.removeEventListener('click', clickListener)
        }
    }, [])

    const clickListener = (e) => {
        console.log('Have I clicked on the header ? ', e.target.localName === 'header')
    }

    return (
        <header className='header' style={{backgroundColor: color}}>
            Header {user.name}
        </header>
    )
}

export default memo(Header1)
