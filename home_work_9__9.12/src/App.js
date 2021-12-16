import {Component} from 'react'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataState: null,
            res: [],
            searchValue: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => this.setState({dataState: data}))
            .catch(err => console.error(err));
    }

    handleSearch = (e) => {
        this.setState({searchValue: e.target.value})
    }

    render() {
        const {res, searchValue} = this.state
        return (
            <>
                <input value={searchValue} onChange={this.handleSearch} className='searchInput'/>
                <button className='searchButton'>click</button>
                <div className='resultDiv'>{
                    res.map(item => <div key={item.id}>UserId:{item.userId}, Id:{item.id}, Title:{item.title},
                        Completed:{item.completed}</div>)
                }</div>
            </>
        )
    }
}

export default App;
