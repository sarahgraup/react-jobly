import { useState, useEffect} from 'react';

/** Component for Search bar
 * 
 * Props:
 * - parent search function
 * 
 * State:
 * - formData: user input in search bar
 * 
 * call list
 * { CompanyList, JobList } -> Search
 */

function Search({ search }) {
    const [formData, setFormData] = useState(""); //dont need to call it form data since it is just one input

    //calls parent fn with form data on submit
    function handleSubmit(evt) { //async and await call to search so can handle errors
        evt.preventDefault();
        search(formData);
        setFormData(formData); //dont need
    }

    //sets data on change of input
    function handleChange(evt) {
        setFormData(evt.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input className="Search-Bar"
                    value={formData}
                    name="formData"
                    onChange={handleChange}>
                </input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Search;