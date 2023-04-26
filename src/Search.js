import { useState } from 'react';
/** Component for summary
 * 
 * Props:
 * - 
 * 
 * State:
 * - 
 * 
 * call list
 */

function Search({ search }) {
    const [formData, setFormData] = useState("");

    function handleSubmit(evt) {
        evt.preventDefault();
        search(formData);
        setFormData(formData);
    }

    console.log(formData);
    function handleChange(evt) {
        setFormData(evt.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input className="Search-Bar"
                    value={formData}
                    name="formData"
                    onChange = {handleChange}>
                </input>
                <button type = "submit">Submit</button>
            </form>
        </div>
    );


}

export default Search;