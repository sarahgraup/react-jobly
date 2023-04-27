import './Home.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import userContext from './userContext';

/** Component for Homepage
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * call list
 * - Routelist -> Home
 */

function Home() {
    console.log("Home");
    const currentUser = useContext(userContext);

    return (
        <div className="Home">
            <h1 className="Home-h1">Jobly</h1>
            <div className="Home-subheading">All the jobs in one convenient place</div>
            {currentUser !== null
            ? <h2>Welcome back, {currentUser.user.firstName}</h2>
            :<div className='Home-buttons'>
                <button><Link to="/signup">Sign Up</Link></button>
                <button><Link to="/login">Log In</Link></button>
            </div>}
        </div>
    );
}
export default Home;