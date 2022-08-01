import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RouteList from './routes'
function App() {
  return (
    <div className="App">
      <RouteList/>
    </div>
  );
}

export default App;
