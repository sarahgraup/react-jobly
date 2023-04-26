import { useState, useEffect} from 'react';
import "./Search.css";

/** Component for Search bar
 * 
 * Props:
 * - parent search function
 * 
 * State:
 * - searchTerm: user input in search bar
 * 
 * call list
 * { CompanyList, JobList } -> Search
 */

function Search({ search }) {
    const [searchTerm, setSearchTerm] = useState("");
    console.debug("Search state: ", searchTerm);

    //calls parent fn with form data on submit
    async function handleSubmit(evt) {
        evt.preventDefault();
        await search(searchTerm.trim());
    }

    //sets data on change of input
    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input className="Search-Bar"
                    value={searchTerm}
                    name="searchTerm"
                    onChange={handleChange}>
                </input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Search;