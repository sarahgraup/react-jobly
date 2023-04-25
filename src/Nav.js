import { NavLink } from "react-router-dom";
/**Navigation bar for every page on site 
 * State:none
 * Props:none
*/
function Nav() {
    return (
        <nav> {/*add classname*/}
            <NavLink className="Nav-Home" to="/"
                style={({ isActive, isPending }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
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