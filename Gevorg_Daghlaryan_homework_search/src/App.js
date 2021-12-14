import './App.css';
import React, {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    items: result,

                });
            })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        const {items, value} = this.state;

        const filteredTitles = items.filter(itm => {
            return itm.title.toLowerCase().includes(value.toLowerCase())
        })


        return (
            <>
                <form>
                    <input type="text"
                           placeholder="Search here..."
                           onChange={this.handleChange}
                    />

                </form>
                <div className='titleList'>

                    {
                        filteredTitles.map(itm => (
                            <div key={itm.id} className='title'>
                                {itm.title}
                            </div>
                        ))
                    }

                </div>
            </>
        )

    }
}