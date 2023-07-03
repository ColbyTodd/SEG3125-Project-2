import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand" to='/'>
                <img src="https://previews.123rf.com/images/sergeymastepanov/sergeymastepanov1703/sergeymastepanov170300020/73493596-ice-hockey-logo-vector.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to='/'>Home</Link>
                    <Link className="nav-item nav-link" to="/search">Search</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;