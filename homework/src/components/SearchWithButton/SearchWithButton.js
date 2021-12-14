import { Component } from "react";

    class SearchWithButton extends Component {
        constructor(props){
            super(props)

            this.state = {
                initialTodos: [],
                currentTodos: [],
                inputValue: ""
            }
        }

        componentDidMount(){
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(json => {
            this.setState({ initialTodos: json })
    })
        }

        render(){

            const { initialTodos, currentTodos, inputValue } = this.state

            return(
                <div className="SearchWithButton" style={{width: window.screen.width/2}}>
                    <input 
                        type="text" 
                        onChange={(evt) => {
                            this.setState({ inputValue: evt.target.value})
                        }}/>

                    <button onClick={() => {
                        if(inputValue.length !== 0){
                            this.setState({ currentTodos: initialTodos.filter(elem => elem.title.includes(inputValue))})
                            /*es stex chhaskaca petq inputi valuen parunakox titlener@ te  havasarner@ senc greci 
                            ete havasarnern er petq uxaki elem.title.includes(inputValue)i poxaren  elem.title === inputValue*/
                        } else {
                            this.setState({ currentTodos: []})
                        }
                    }}>Search</button>
                    {
                        
                        currentTodos.map((elem) => {
                            return (
                            <div>
                                {elem.title}
                            </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

export default SearchWithButton;