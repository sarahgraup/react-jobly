import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Nav from './Nav';
import './App.css';
import userContext from './userContext';


/**renders entire application- Nav and RoutesList
 * 
 * State: currentUser
 *  - the user object from API that is passed via context throughout app
 * 
 * Props:none
 * 
 * 
 * */ 
function App() {
  

  return (
    <div className="App">
      <userContext.Provider
      value={{
        currentUser:{
         
         
        }

      }}>
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
      </userContext.Provider>
    </div>

  );
}

export default App;
