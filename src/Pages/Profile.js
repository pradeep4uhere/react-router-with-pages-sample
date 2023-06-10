import React from 'react'

export const Profile = () => {
  return (
    <>
    <section className="section section-count">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="ask-question">
							<h2>Asked Have Questions?</h2>
						</div>
						<div className="accordion">
							<ul className="accordion">
								<li>
									<a>Who I Am?</a>
									<p>Persistent professional equipped with 11 years of comprehensive experience in IT industry. Provides
strong technical direction across multiple projects. Responsible and articulate individual with strengths
in solutions optimization
									</p>
								</li>
								<li>
									<a>Why You Chooice Me?</a>
									<p>Responsible and articulate individual with strengths
in solutions optimization, mobile and cloud solutions and global project management. Hardworking
software development professional driven to increase team effectiveness. Focused on usability and
performance improvements. Proven history of developing useful, efficient and cost-effective projects.

									</p>
								</li>
								<li>
									<a>Available Experiences!</a>
									<p> React.js, Node Js
                                        Laravel Framework, PHP & MySQL
                                        HTML, CSS
                                        JavaScript, jQuery
                                        Magento
                                        Mobile Development, React Native
                                        Webservices With Laravel
                                        Product Deployment On Server
                                        MySQL Database Designing
                                        Docker
                                        Web Based Software Engineering
                                        Software Development Methodology
                                        Expert with Visual Code Editor
									</p>
								</li>
							</ul>
						</div> 
					</div>
					<div className="col-md-6">
						<div className="ask-question ask-middle">
							<h2>Available Experiences!</h2>
						</div>
						<div className="row">							
							<div className="col-md-6 col-sm-6">
								<div className="counter-wrapper text-center">
									<div className="counter-icon">
										<i className="la la-user-friends"></i>
									</div>
									<div className="counter-text">
										<h2 className="counter">145</h2>
										<span>Happy Customers</span>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6">
								<div className="counter-wrapper text-center">
									<div className="counter-icon">
										<i className="la la-edit"></i>
									</div>
									<div className="counter-text">
										<h2 className="counter">28</h2>
										<span>Running Design</span>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 ">
								<div className="counter-wrapper text-center">
									<div className="counter-icon">
										<i className="la la-award"></i>
									</div>
									<div className="counter-text">
										<h2 className="counter">15</h2>
										<span>Technology Use</span>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6">
								<div className="counter-wrapper text-center">
									<div className="counter-icon">
										<i className="la la-thumbs-up"></i>
									</div>
									<div className="counter-text">
										<h2 className="counter">180</h2>
										<span>Complete Project</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    
    </>
  )
}
