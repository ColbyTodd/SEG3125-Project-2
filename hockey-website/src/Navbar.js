import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand" to='/'>
                <img src={process.env.PUBLIC_URL + '/logo-white.png'} width="30" height="30" className="d-inline-block ms-4" alt="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to='/'>Home</Link>
                    <Link className="nav-item nav-link active" to="/search">Search</Link>
                </div>
                
            </div>
            <div className="navbar-nav navbar-right me-4">
                <select className="nav-item nav-link active" style={{ float: 'right' }}>
                        <option style={{color: "black"}} selected>EN</option>
                        <option style={{color: "black"}}>FR</option>
                </select>
            </div>
        </nav>
    );
}
 
export default Navbar;