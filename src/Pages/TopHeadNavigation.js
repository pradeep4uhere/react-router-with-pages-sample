import { Link } from "react-router-dom";
const TopHeadNavigation = () =>{
    return (
        <header>
      <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
           style={{left:'0rem'}}>
      <a className="navbar-brand" href="#" style={{width:"17%"}}>
        Logo Here
      </a>
      <nav className="navbar bg-primary" style={{width:'100%'}}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">About Us</Link>
              </li>
             
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">contact-us</Link>
              </li>
              <li className="nav-item dropdown text-right">
                { <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a> }
                <ul className="dropdown-menu">
                  <li><Link to="/page-1" className="dropdown-item">Page-1</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link to="/page-2" className="dropdown-item">Page-2</Link></li>
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </nav>
  </header>
    );
}

export default TopHeadNavigation;