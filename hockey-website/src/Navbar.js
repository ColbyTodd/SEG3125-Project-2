const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href={process.env.PUBLIC_URL + '/'}>
                <img src="https://previews.123rf.com/images/sergeymastepanov/sergeymastepanov1703/sergeymastepanov170300020/73493596-ice-hockey-logo-vector.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href={process.env.PUBLIC_URL + '/'}>Home</a>
                    <a className="nav-item nav-link" href={process.env.PUBLIC_URL + "/search"}>Search</a>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;