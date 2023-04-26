import './Home.css';

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
    return (
        <div className="Home">
            <h1 className="Home-h1">Jobly</h1>
            <div className="Home-subheading">All the jobs in one convenient place</div>
        </div>
    );
}
export default Home;