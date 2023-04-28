import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../Api/JoblyApi';
import Loading from '../Loading';
import JobCardList from '../Jobs/JobCardList';
import NotFound from '../NotFound';

/**
 * Component for CompanyDetail
 * 
 * gets API data for single company from params; renders a list of all company's jobs
 * 
 *  props: none
 * 
 *  state: company {[company], isLoading} (state includes jobs)
 * 
 *  RoutesList -> CompanyDetail -> { Search, JobCardList }
 */
function CompanyDetail() {
    const [company, setCompany] = useState({ companyData: null, isLoading: true });
    // console.debug("CompanyDetail state: ", company);

    const { handle } = useParams();

    //fetches single company data from api after first render
    useEffect(function fetchCompanyOnMount() {
        async function fetchCompany(handle) {
            try {
            const results = await JoblyApi.getCompany(handle);
            setCompany({
                companyData: results,
                isLoading: false
            })
            }
            catch (err) {
                // console.log("err", err);
                setCompany({
                    companyData: null,
                    isLoading: false
                });
            }
            }
        fetchCompany(handle);
    }, [handle]);
    // if(company.isLoading===false && !Object.keys(company.companyData).length){
        if(company.isLoading===false && company.companyData === null){

    return <NotFound />;
    }

    return (
        <div className="CompanyDetail">
            {company.isLoading
                ? <Loading />
                : (<div>
                    <div className='CompanyDetail-name'>
                        <h2>{company.companyData.name}</h2>
                        <p>{company.companyData.description}</p>
                    </div>
                    <JobCardList jobs={company.companyData.jobs} />
                </div>)}
        </div>
    );
}

export default CompanyDetail;