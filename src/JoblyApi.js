import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
    // Remember, the backend needs to be authorized with a token
    // We're providing a token you can use to interact with the backend API
    // DON'T MODIFY THIS TOKEN
    static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
        "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
        "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
    
        
        static async request(endpoint, data = {}, method = "get") {
            console.debug("API Call:", endpoint, data, method);
            console.log("API token: ", this.token);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    /** Get details on a company by handle. */

    static async getCompany(handle) {
            let res = await this.request(`companies/${handle}`);
            return res.company;        
    }

    /** Get list of companies or list based on filter by searchName. */
    static async getCompanies(searchName) {
            let res;
            if (searchName === undefined || searchName === "") {
                res = await this.request("companies")
            } else {
                res = await this.request(`companies/?nameLike=${searchName}`);
            }
            // console.log(res.companies);
            return res.companies;

    }

    /** Get list of jobs or list based on filter by searchTitle.
      */
    static async getJobs(searchTitle) {
        let res;
        if (searchTitle === undefined || searchTitle === "") {
            res = await this.request("jobs");
        } else {
            res = await this.request(`jobs/?title=${searchTitle}`);
            console.log(res.jobs);
        }
        return res.jobs;
       }

    /** Authenticate a user with {username, password} and return a token from
     * the API. 
     */
    static async authenticateUser(userData) {
        const res = await this.request("auth/token", userData, "post");
        this.token = res.token;
        return this.token;
    }

    /** Sign up a new user with { username, password, firstName, lastName, email }
     * and return a token from the API.
     */
    static async signupUser(userData) {
        const res = await this.request("auth/register", userData, "post");
        this.token = res.token;
        return this.token;
    }

    /** Get user data with username from API and return 
     *  { username, firstName, lastName, isAdmin, jobs }
     *   where jobs is { id, title, companyHandle, companyName, state }
     */
    static async getUser(username) {
        const res = await this.request(`users/${username}`);
        return res;
    }


}
export default JoblyApi;