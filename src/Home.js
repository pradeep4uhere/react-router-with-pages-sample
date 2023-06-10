import React from 'react';
import Aboutus from "./Pages/Aboutus";
import { Client } from "./Pages/Client";
import Contact from "./Pages/Contact";
import ContactMe from "./Pages/ContactMe";
import { Footer } from "./Pages/Footer";
import { Portfolio } from "./Pages/Portfolio";
import Price from "./Pages/Price";
import { Profile } from "./Pages/Profile";
import Project from "./Pages/Project";
import { Service } from "./Pages/Service";
import { TypeAnimation } from 'react-type-animation';
import TextTransition, { presets } from 'react-text-transition';

const Home = () =>{
	const TEXTS = ['Full Stack Developer !', 'React.js Developer', 'Node.js Developer', 'Laravel Developer','PHP Developer'];
	const [index, setIndex] = React.useState(0);
	React.useEffect(() => {
		const intervalId = setInterval(
		  () => setIndex((index) => index + 1),
		  3000, // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	  }, []);
    return(<>
    <div id="home" className="banner-area">
			<div className="banner-active text-rr">
				<div id="particles-js" className="banner-wrapper text-rotating-wd vh d-flex" style={{backgroundImage:"url('img/IMG_0853.JPG')",backgroundPosition: "center",backgroundSize:"cover"}}>
					<div className="container">
						<div className="row">
							<div className="col-md-12 home-4-warp text-center">
								<h1>Hello, I'm &nbsp;

								<TypeAnimation
									sequence={[
										' Pradeep Kumar !',
										2000,
										' Pradeep Kumar !',
										3000,
										' Pradeep Kumar !',
										4000,
										' Pradeep Kumar !',
										5000,
										' Pradeep Kumar !',
										 // Types 'One'
										() => {
										console.log('Sequence completed');
										},
									]}
									wrapper="span"
									cursor={true}
									repeat={Infinity}
									style={{  display: 'inline-block',color:'#FFF' }}
									/>	
								</h1>
								<span style={{ fontSize: '2em', display: 'inline-block',color:'#FFF' }}><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></span>
															
								<div className="mp-button btn-color-2">
									<a href="PRADEEP_KUMAR_Resume.pdf" target="_blank"><i className="fa fa-download"></i>&nbsp;Download CV</a>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        <Aboutus/>
        <Contact/>
        <Service/>
        <Portfolio/>
        <Profile/>
        <Project/>
        <Price/>
        <Client/>
        <ContactMe/>
		<Footer/>
        </>)
}

export default Home;