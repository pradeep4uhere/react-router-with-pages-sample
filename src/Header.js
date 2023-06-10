const Header = () =>{
    return (
    <>
      <div className="preloader">
          <div id="circle_square">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
      <div id="header-sticky" className="bottom-menu small-menu bg-3 mobile-menu">
			<div className="container">
				<div className="row bbr-mb menu-background">
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-8">
						<div className="logo">
							<a href="">
								<img src="./img/logo.png" className="logo" style={{height:"47px",margin:"10px"}}/>
							</a>
						</div>
					</div>
					<div className="col-xl-8 col-lg-8 col-md-8 col-sm-2">
						<div className="wrap_nav mainmenu text-right">
							<ul id="nav-13">
								<li className="scroll-to"><a href="#home" className="scroll-click">Home</a></li>
								<li className="scroll-to"><a href="#about" className="scroll-click">About</a></li>
								<li className="scroll-to"><a href="#service" className="scroll-click">Services</a></li>
								<li className="scroll-to"><a href="#Portfolio" className="scroll-click">Skills</a></li>
								<li className="scroll-to"><a href="#pricing" className="scroll-click">Pricing</a></li>
								<li className="scroll-to"><a href="#client" className="scroll-click">Client</a></li>
								<li className="scroll-to"><a href="#blog" className="scroll-click">Blog</a></li>
								<li className="scroll-to"><a href="#contact" className="scroll-click">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
      
    </>
        
    )

} 

export default Header;