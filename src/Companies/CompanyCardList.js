import CompanyCard from "./CompanyCard";

/** Component for CompanyCardList
 * Handles data and renders an array of CompanyCards
 * 
 * Props:
 * - array of companies
 * 
 * State:
 * - none
 * 
 * CompanyList -> CompanyCardList -> CompanyCard
 */

function CompanyCardList({ companies }) {
    console.debug("CompanyCardList");

    return (
        <div className="CompanyCardList">
            {companies.map(company =>
                <CompanyCard key={company.handle} company={company} />
                )
            }
        </div>
    )
}

export default CompanyCardList;