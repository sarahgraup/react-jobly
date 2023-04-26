
/** Component for Loading page
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * call list
 * { CompanyDetail, JobList, CompanyList } -> Loading
 */

function Loading() {
    return (
        <div className="loading">
            <img src = "/snail.gif" style={{width:"50%"}}></img>
        </div>
    );

}

export default Loading;