import { useEffect, useState } from "react";
import CompanyCardList from "./CompanyCardList";
import Loading from "../Loading";
import JoblyApi from "../JoblyApi";
import Search from "../Search";

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
            });
        }
        fetchCompanies();
    }, []);

    async function companySearch(Searchname) {
        const results = await JoblyApi.getCompanies(Searchname);
        setCompanies(curr => {
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
                    {companies.companiesData ?
                        <CompanyCardList companies={companies.companiesData} /> :
                        <p>Sorry no results were found</p>}
                </div>}
        </div>
    );
}

export default CompanyList;