import './App.css';
import FetchClass from './components/FetchClass';
import FetchFunction from './components/FetchFunction';

function App() {
  return (
    <div className="container">
      <h2 >My todo list</h2>
        <div className="underline"></div>
      <FetchClass />
      {/* <FetchFunction /> */}
    </div>
  );
}

export default App;