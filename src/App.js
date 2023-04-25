import {BrowserRouter} from 'react-router-dom';
import RoutesList from './RoutesList';
import './App.css';


/**renders entire application */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
