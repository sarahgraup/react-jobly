import { useEffect, useState } from "react";
import CompanyCardList from "./CompanyCardList";
import Loading from "../Loading";
import JoblyApi from "../JoblyApi";

/**
 * gets API data for companies
 * renders list of all companies or searched companies
 * - props: none
 * - state: companies {[companies], isLoading}
 * - calls: Search, CompanyCard
 * 
 */
function CompanyList() {
    const [companies, setCompanies] = useState({ companiesData: [], isLoading: true })
    console.debug("CompanyList state: ", companies);

    useEffect(function fetchCompaniesOnMount() {
        async function fetchCompanies() {
            const results = await JoblyApi.getCompanies();
            setCompanies(curr => {
                curr.companiesData = results;
                curr.isLoading = false;
                return { ...curr };
            })
        }
        fetchCompanies();
    }, [ ]);

    return (
        <div className="CompanyList">
            {companies.isLoading
                ? <Loading />
                : <CompanyCardList companies={companies.companiesData} />}
        </div>
    );
}

export default CompanyList;