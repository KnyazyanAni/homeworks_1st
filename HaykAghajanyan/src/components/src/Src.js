import { Component } from "react";



class Src extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inpVal: '',
            resSer: [],
            filterd: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then((commits) => {
                this.setState({ resSer: [...commits] })
            })
    }
    hendelClick(arr, text) {
        const retArr = arr.filter((e) => {
            return e.title.includes(text)
        })
        this.setState({ filterd: [...retArr] })
    }

    render() {
        const { resSer, filterd } = this.state
        return (
            <>
                <input type="text" onChange={(e) => {
                    this.state.inpVal = e.target.value
                }} />
                <button onClick={() => this.hendelClick(resSer, this.state.inpVal)}>serch</button>
                {
                    filterd.length===0 ? 
                        resSer.map(e => {
                            return (
                                <h2 key={e.id} >{e.title}</h2>
                            )
                        })
                        :
                        filterd.map(e => {
                            return (
                                <h2 key={e.id} >{e.title}</h2>
                            )
                        })

                }
            </>
        )
    }
}


export default Src