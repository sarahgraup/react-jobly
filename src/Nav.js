import { NavLink } from "react-router-dom";
/** Component for Naf
 * 
 * Navigation bar for every page on site 
 * 
 * State:none
 * 
 * Props:none
 * 
 * Links to: /companies, /jobs, /
 * 
 * App -> Nav
*/
function Nav() {
    return (
        <nav className="Nav">
            <NavLink className="Nav-Home" to="/"
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black", //red and black as const var
                    };
                }}>
                Jobly</NavLink>
            <NavLink className="Nav-Companies" to="/companies"
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                    };
                }}>
                Companies</NavLink>
            <NavLink className="Nav-Jobs" to="/jobs"
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                    };
                }}>
                Jobs</NavLink>
        </nav>
    );
}
export default Nav;