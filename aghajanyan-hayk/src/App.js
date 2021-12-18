import {Component, useEffect, useState} from "react";
import Header from "./components/Header";
import {circlesColors, circlesIds} from "./helpers/constants";

const {
    RED,
    BLUE,
    PURPLE,
    BROWN,
    GREEN,
    ORANGE
} = circlesColors

const {
    FIRST_CIRCLE,
    SECOND_CIRCLE,
    THIRD_CIRCLE,
    FOURTH_CIRCLE,
    FIFTH_CIRCLE
} = circlesIds

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circles: [
                {
                    id: FIRST_CIRCLE,
                    color: RED
                },
                {
                    id: SECOND_CIRCLE,
                    color: BLUE
                },
                {
                    id: THIRD_CIRCLE,
                    color: PURPLE
                },
                {
                    id: FOURTH_CIRCLE,
                    color: BROWN
                },
                {
                    id: FIFTH_CIRCLE,
                    color: GREEN
                },
            ],
            chosenCircle: null,
            isHeaderShown: true,
            user: {
                name: 'Hayk',
                age: 27
            }
        }
    }

    componentDidMount() {
        console.log('did mount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // if(nextState.chosenCircle === '3') {
        //     return false
        // }
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did update')
    }

    clickHandler = (e) => {
        this.setState({chosenCircle: e.target.id})
    }

    headerToggle = () => {
        this.setState({isHeaderShown: !this.state.isHeaderShown})
    }

    render() {
        const {circles, chosenCircle, isHeaderShown, user} = this.state

        return (
            <>
                {
                    isHeaderShown && <Header
                        user={user}
                        color={chosenCircle && circles[chosenCircle - 1].color}
                    />
                }
                <button onClick={(e) => this.headerToggle(e)}>{isHeaderShown ? 'Hide' : 'Show'} header</button>
                <div className='container'>
                    {
                        circles.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    id={item.id}
                                    className='circle'
                                    style={{backgroundColor: chosenCircle === item.id ? ORANGE : item.color}}
                                    onClick={this.clickHandler}
                                >
                                    {item.id}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

const App1 = () => {
    const [circles] = useState([
        {
            id: FIRST_CIRCLE,
            color: RED
        },
        {
            id: SECOND_CIRCLE,
            color: BLUE
        },
        {
            id: THIRD_CIRCLE,
            color: PURPLE
        },
        {
            id: FOURTH_CIRCLE,
            color: BROWN
        },
        {
            id: FIFTH_CIRCLE,
            color: GREEN
        },
    ])
    const [chosenCircle, setChosenCircle] = useState(null)
    const [isHeaderShown, setIsHeaderShown] = useState(true)
    const [user] = useState({
        name: 'Hayk',
        age: 27
    })

    useEffect(() => {
        console.log('header toggled')
    }, [isHeaderShown])

    const clickHandler = (e) => {
        // this.setState({chosenCircle: e.target.id})
        setChosenCircle(e.target.id)
    }

    const headerToggle = () => {
        // this.setState({isHeaderShown: !this.state.isHeaderShown})
        setIsHeaderShown((prev) => !prev)
    }

    return (
        <>
            {
                isHeaderShown && <Header
                    user={user}
                    color={chosenCircle && circles[chosenCircle - 1].color}
                />
            }
            <button onClick={headerToggle}>{isHeaderShown ? 'Hide' : 'Show'} header</button>
            <div className='container'>
                {
                    circles.map(item => {
                        return (
                            <div
                                key={item.id}
                                id={item.id}
                                className='circle'
                                style={{backgroundColor: chosenCircle === item.id ? ORANGE : item.color}}
                                onClick={clickHandler}
                            >
                                {item.id}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default App1;
