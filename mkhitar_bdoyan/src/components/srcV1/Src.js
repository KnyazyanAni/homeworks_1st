import { Component } from "react";
class SrcV1 extends Component {
    constructor(props) {
        super(props);
        this.id = 0;
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
    hendelChenj(arr, text) {

        const retArr = arr.filter((e) => {
            return e.title.indexOf(text)>-1
        })
        this.setState({ filterd: [...retArr] })
    }

    render() {
        const { resSer, filterd } = this.state
        return (
            <>
                <input type="text" onChange={(e) => {
                    if (!this.id) {
                        this.id = setTimeout(() => {
                            this.state.inpVal = e.target.value;
                            this.hendelChenj(resSer, this.state.inpVal)
                        }, 1000)
                    } else {
                        clearTimeout(this.id)
                        this.id = setTimeout(() => {
                            this.state.inpVal = e.target.value;
                            this.hendelChenj(resSer, this.state.inpVal)
                        }, 1000)
                    }
                }
                } />

                {
                    !this.state.inpVal  ?
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


export default SrcV1