import { useHistory } from "react-router-dom";

const Error = () => {
    let history = useHistory();

    return (  
        <div className="">
            <div className="ps-5 pt-4">
                <button className="btn btn-dark" onClick={() => history.goBack()}>Back</button>
            </div>  
            <div className="d-flex align-items-center justify-content-center p-5">
                <div className="">
                    <h1 className="text-center">Sorry, The page you're looking for no longer exists.</h1>
                    <h3 className="text-center">Please return to the previous page.</h3>
                </div>
            </div>
        </div>
        
    );
}
 
export default Error;