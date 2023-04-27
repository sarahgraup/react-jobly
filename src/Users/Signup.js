import { useState } from "react";
import { Navigate } from "react-router-dom";
/**Component for Signup
 * 
 * renders signup form and calls signup with inputted info
 * 
 * Props:signup
 * 
 * State:formData
 */
function Signup({ signup }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName:"",
        lastName:"",
        email:"",
        errors: []
    });

    //handles input change
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(input=>({
            ...input,
            [name]:value
        }));
    }

    //calls parent fn signup and if successful redirects to home page
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await signup(formData);
            <Navigate to="/"></Navigate>
        } catch (err) {
            setFormData(
                curr => {
                    curr.errors = err
                    return { ...curr }
                }
            )
        }

    }

    return (
        <div className="Signup-form">
            <form onSubmit={handleSubmit}>
            <label for="username">Username </label>
                <input className="signup-input"
                    value={formData.username}
                    name="username"
                    onChange={handleChange}>
                </input>
                <label for="password">Password </label>
                <input className="signup-input"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}>
                </input>
                <label for="firstName">First Name </label>
                <input className="signup-input"
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleChange}>
                </input>
                <label for="lastName">Last Name </label>
                <input className="login-input"
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleChange}>
                </input>
                <label for="email">Email</label>
                <input className="signup-input"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}>
                </input>
                <button type="submit">Submit</button>
            </form>
            {formData.errors.length ?
                <ul className="Errors">
                    {formData.errors.map(error => (
                        <li key = {error}>
                            {error}
                        </li>
                    ))}
                </ul>:""
            }
        </div>
    );
}

export default Signup;