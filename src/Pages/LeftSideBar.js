import { Link } from "react-router-dom";
const LeftSideBar = () =>{
    return (
        <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
        >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <Link className="list-group-item list-group-item-action py-2 ripple active" to="/">
            <i className="fas fa-tachometer-alt fa-fw me-3"></i
              ><span>Dashboard</span>
          </Link>
           <Link className="list-group-item list-group-item-action py-2 ripple" to="/setting">
            <i className="fas fa-chart-area fa-fw me-3"></i
              ><span>General Setting</span>
           </Link>
           <Link className="list-group-item list-group-item-action py-2 ripple" to="/profile">
            <i className="fas fa-lock fa-fw me-3"></i><span>Profile</span>
            </Link>
            <Link className="list-group-item list-group-item-action py-2 ripple" to="/pages">
              <i className="fas fa-chart-line fa-fw me-3"></i
            ><span>Pages</span>
            </Link>
            <Link className="list-group-item list-group-item-action py-2 ripple" to="/changepassword">
            <i className="fas fa-chart-pie fa-fw me-3"></i><span>Change Password</span>
            </Link>
            <Link className="list-group-item list-group-item-action py-2 ripple" to="/blog">
              <i className="fas fa-chart-bar fa-fw me-3"></i><span>Blog</span>
            </Link>
          
         
        </div>
      </div>
    </nav>
    );
}

export default LeftSideBar;