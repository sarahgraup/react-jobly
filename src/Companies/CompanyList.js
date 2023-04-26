import { useEffect, useState } from "react";
import CompanyCardList from "./CompanyCardList";
import Loading from "../Loading";
import JoblyApi from "../JoblyApi";
import Search from "../Search";

/**
 * Component for CompanyList
 * 
 * gets API data for companies
 * 
 * props: none
 * 
 * state: companies {[companies], isLoading}
 * 
 * RoutesList -> CompanyList -> { Search, CompanyCardList }
 * 
 */
function CompanyList() {
    const [companies, setCompanies] = useState({ companiesData: [], isLoading: true })
    console.debug("CompanyList state: ", companies);
    //add use state to show what you are filtering to based on search


    //fetches list of companies from api after first render
    useEffect(function fetchCompaniesOnMount() {
        async function fetchCompanies() {
            const results = await JoblyApi.getCompanies();
            setCompanies(curr => {
                curr.companiesData = results;
                curr.isLoading = false;
                return { ...curr };
            });
        }
        fetchCompanies();
    }, []);

    //fetches companies from api after search submit filters
    async function companySearch(searchName) { 
        const results = await JoblyApi.getCompanies(searchName);
        setCompanies(curr => { //set companies does not rely on old state so dont need to make it a function
            curr.companiesData = results;
            curr.isLoading = false;
            return { ...curr };
        });
    }

    return (
        <div className="CompanyList">
            {companies.isLoading
                ? <Loading />
                : <div>
                    <Search search={companySearch} />
                    showing results for: Baker
                    {companies.companiesData.length ?
                        <CompanyCardList companies={companies.companiesData} /> :
                        <p>Sorry no results were found</p>}
                </div>}
        </div>
    );
}

export default CompanyList;