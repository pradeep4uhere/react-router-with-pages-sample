import React from 'react'

export const Portfolio = () => {
  return (<>
  <div id="Portfolio" className="section-two section-protfolio">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-tittle text-center">
							<div className="tittle-detail">
								<span>My skills</span>
								<h2>My Skills 👩‍💻</h2>
								<p>Skills that help me to making your site unique and beautiful.</p>
								<p>	

								<a href="https://github.com/pradeep4uhere" target="_blank" className="btn btn-primary"><i className="fa fa-github"></i>&nbsp;Find On GitHub</a>
								<a href="PRADEEP_KUMAR_Resume_2023.docx" target="_blank" className="btn btn-primary"><i className="fa fa-download"></i>&nbsp;Download CV</a>
								<a href="https://linkedin.com/in/pradeep-kumar-4a2b3648" target="_blank" className="btn btn-primary"> <i className="fa fa-linkedin"></i>&nbsp;Find On Linkedin</a>
								<a href="https://hub.docker.com/r/payertrust/pradeeptechnical" target="_blank" className="btn btn-primary mt-1"> <i className="fa fa-docker"></i>&nbsp;Find On DockerHub</a>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="portfolio-menu mt-2 mb-4">
					<ul>
					<li className="active" data-filter="*">All</li>
					<li className="" data-filter=".gts">Programming</li>
					<li className="" data-filter=".lap">UI-Design</li>
					<li className="" data-filter=".selfie">Database</li>
					<li className="text" data-filter=".server">Server</li>
					<li className="text" data-filter=".editor">Editor</li>
					</ul>
				</div>

				<div className="portfolio-item row">
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
				<div className="protfolio-wrapper mb-30">
					<img src="./img/skill/react.svg" alt="" />
					<figcaption>
						<h2><a href="#">React jS</a></h2>
					</figcaption>
				</div>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/nodejs.jpg" alt="nodejs" />
				<figcaption>
					<h2><a href="#">Node jS</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item gts selfie col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/redux.svg" alt="" />
				<figcaption>
					<h2><a href="#">Redux</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/javascript.svg" alt="" />
				<figcaption>
					<h2><a href="#">JavaScript</a></h2>
				</figcaption>
			</div>
            </div>
            
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/html.svg" alt="HTML" />
				<figcaption>
					<h2><a href="#">HTML</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/css.svg" alt="CSS" />
				<figcaption>
					<h2><a href="#">CSS</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/cakephp2.jpg" alt="CakePHP" />
				<figcaption>
					<h2><a href="#">Cake PHP</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/api.jpg" alt="API Service" />
				<figcaption>
					<h2><a href="#">API</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/balma.png" alt="Bulma" />
				<figcaption>
					<h2><a href="#">Bulma</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/figma.png" alt="Figma" />
				<figcaption>
					<h2><a href="#">Figma</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item gts selfie server col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/logofirebase.png" alt="Firebase" />
				<figcaption>
					<h2><a href="#">Firebase</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/git.svg" alt="Git"/>
				<figcaption>
					<h2><a href="#">Git</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/wordpress.svg" alt="Git"/>
				<figcaption>
					<h2><a href="#">Wordpress</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item lap selfie col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/sql.svg" alt="SQL"/>
				<figcaption>
					<h2><a href="#">SQL</a></h2>
				</figcaption>
			</div>
            </div>
           
            <div className="item gts selfie col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/mongo.jpeg" alt="Mongo DB"/>
				<figcaption>
					<h2><a href="#">Mongo DB</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item selfie server col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/apache2.png" alt="Apache Server"/>
				<figcaption>
					<h2><a href="#">Apache2</a></h2>
				</figcaption>
			</div>
            </div>
			<div className="item gts col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/laravel.png" alt="" />
				<figcaption>
					<h2><a href="#">Laravel</a></h2>
				</figcaption>
			</div>
            </div>
			<div className="item gts selfie col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/mysql.jpeg" alt="MySQL"/>
				<figcaption>
					<h2><a href="#">Mysql</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/magento.png" alt="Magento"/>
				<figcaption>
					<h2><a href="#">Magento</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/xampp_94513.png" alt="Xampp Server"/>
				<figcaption>
					<h2><a href="#">Xampp</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item server col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/whm.jpeg" alt="WHM VPS Server"/>
				<figcaption>
					<h2><a href="#">WHM</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/cpanel.jpg" alt="Cpanel Server"/>
				<figcaption>
					<h2><a href="#">Cpanel</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item lap server col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/linuxmint.svg" alt="Linux Mint"/>
				<figcaption>
					<h2><a href="#">Linux</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/docker.png" alt="Docker"/>
				<figcaption>
					<h2><a href="#">Docker</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item  col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/github.png" alt="Docker"/>
				<figcaption>
					<h2><a href="#">Git Hub</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item  server col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/window.png" alt="Docker"/>
				<figcaption>
					<h2><a href="#">Window</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item editor col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/sublime.jpeg" alt="Sublime Editor"/>
				<figcaption>
					<h2><a href="#">Sublime</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item editor col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/visual.png" alt="Visual Code Editor"/>
				<figcaption>
					<h2><a href="#">Visual</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
				<img src="./img/skill/bootstrap.jpeg" alt="Bootstrap"/>
				<figcaption>
					<h2><a href="#">Bootstrap</a></h2>
				</figcaption>
			</div>
            </div>
            <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
			<div className="protfolio-wrapper mb-30">
						<img src="./img/skill/android.png" alt="Android Studio"/>
						<figcaption>
							<h2><a href="#">Android</a></h2>
						</figcaption>
					</div>
            </div>
         </div>
			</div>
		</div>
    </>
  )
}
