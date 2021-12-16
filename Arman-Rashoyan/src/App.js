import TodoList from "./components/TodoList/TodoList";


function App()  {
    // Hayk => hooks ու services պապկեքը չպետք է լինի TodoList պապկի մեջ
        return (
            <div className= "App">
                <h1>Please type your title</h1>
                <TodoList/>
            </div>
        )

}

export default App;
