const Aboutus = () =>{
    return (
       <>
       
       <div id="about" className="section section-about">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-tittle text-center">
							<div className="tittle-detail">
								<span>About</span>
								<h2>Pradeep Kumar - Technical 👨‍🎓</h2>
								<p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of outdoor activities, TV web series and English Action Movies. A family person and father of one beautiful daughter,</p>
							</div>
						</div>
					</div>
					<div className="row">						
						<div className="col-md-4">							
							<div className="progress-bar-style">
								<div className="skillbar-group">
									
									<div className="single-skill-bar">
										<div className="skill-bar-content">
											<span className="skill-title tittle-bg">Laravel</span>
										</div>					
										<div className="bar1 barfiller">
											<div className="tipWrap">
												<span className="tip"></span>
											</div>
											<span className="fill progress-bg" data-percentage="90"></span>
										</div>
										<p className="text-muted mt-4">ERP/Web Apps with Laravel Framework. </p>
									</div>
									<div className="single-skill-bar">
										<div className="skill-bar-content">
											<span className="skill-title tittle-bg">React.js</span>
										</div>
										<div className="bar2 barfiller">
											<div className="tipWrap">
												<span className="tip"></span>
											</div>
											<span className="fill progress-bg" data-percentage="80"></span>
										</div>
										<p className="text-muted mt-4">Dynamic web application with latest react js.</p>
									</div>	

									<div className="single-skill-bar">
										<div className="skill-bar-content">
											<span className="skill-title tittle-bg">PHP & MySQL</span>
										</div>					
										<div className="bar1 barfiller">
											<div className="tipWrap">
												<span className="tip"></span>
											</div>
											<span className="fill progress-bg" data-percentage="90"></span>
										</div>
										<p className="text-muted mt-4">Get Custom Development With PHP & Mysql.</p>
									</div>
								
								</div>
							</div>
						</div>	
						
						<div className="col-md-4 text-center warp-middle">
							<div className="about-image text-center">
								<img src="img/me.jpeg" alt="Pradeep Kumar- Technical" />
							</div>
							<figcaption className="d-flex justify-content-center align-items-center shape-wrapper img-shape-two"></figcaption>

						</div>
						<div className="col-md-4">
							<div className="progress-bar-style">
								<div className="single-skill-bar">
									<div className="skill-bar-content">
										<span className="skill-title tittle-bg">Node.js</span>
									</div>
									<div className="bar3 barfiller">
										<div className="tipWrap">
											<span className="tip"></span>
										</div>
										<span className="fill progress-bg" data-percentage="92"></span>
									</div>
									<p className="text-muted mt-4">Server side application with node.js.</p>
								</div>
									<div className="single-skill-bar">
										<div className="skill-bar-content">
											<span className="skill-title tittle-bg">React Native</span>
										</div>
										<div className="bar2 barfiller">
											<div className="tipWrap">
												<span className="tip"></span>
											</div>
											<span className="fill progress-bg" data-percentage="80"></span>
										</div>
										<p className="text-muted mt-4">Dynamic mobile application with react-native.</p>
									</div>	

									
								<div className="single-skill-bar">
									<div className="skill-bar-content">
										<span className="skill-title tittle-bg">Wordpress</span>
									</div>
									<div className="bar4 barfiller">
										<div className="tipWrap">
											<span className="tip"></span>
										</div>
										<span className="fill progress-bg" data-percentage="70"></span>
									</div>
									<p className="text-muted mt-4">Website with theme & customization.</p>
								</div>
							  
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        
        
        </>
    )

}
export default Aboutus;