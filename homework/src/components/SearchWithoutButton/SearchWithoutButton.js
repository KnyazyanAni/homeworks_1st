import { Component } from "react";

    class SearchWithoutButton extends Component {
        constructor(props){
            super(props)

            this.state = {
                initialTodos: [],
                currentTodos: []
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

            const { initialTodos, currentTodos } = this.state

            return(
                <div className="SearchWithoutButton" style={{width: window.screen.width/2}}>
                    <input 
                        type="text" 
                        onChange={(evt) => {
                            this.setState({ currentTodos: initialTodos.filter(elem => elem.title.includes(evt.target.value))})
                            /*es stex chhaskaca petq inputi valuen parunakox titlener@ te  havasarner@ senc greci 
                            ete havasarnern er petq uxaki elem.title.includes(inputValue)i poxaren  elem.title === evt.target.value*/
                        }}
                        />
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

export default SearchWithoutButton;