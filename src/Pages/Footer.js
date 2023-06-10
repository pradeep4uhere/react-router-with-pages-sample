import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className="section footer">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="footer-info-wrapper">
						<div className="logo">
							<a href="">
								<img src="img/color-logo.png" className="logo" style={{height:"57px",margin:"10px"}}/>
							</a>
						</div>
							<div className="social-icon">
								<a className="bg-blue" href="#"><i className="fa fa-facebook"></i></a>
								<a className="bg-gray" href="#"><i className="fa fa-twitter"></i></a>
								<a className="bg-blue" href="linkedin.com/in/pradeep-kumar-4a2b3648"><i className="fa fa-linkedin"></i></a>
								<a className="bg-orange" href="https://www.instagram.com/pradeep4uhere/"><i className="fa fa-instagram"></i></a>
								<a className="bg-black" href="https://github.com/pradeep4uhere"><i className="fa fa-github"></i></a>
							</div>
							<div className="copyright-1">
								<small>Copyright @2022 <a href="">www.pradeeptechnical.com</a> All Rights Reserved.</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
