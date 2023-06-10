const ContactMe = () =>{
    return(
        <>
        <div id="contact" className="section-two section-contact contact-area">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-tittle text-center">
							<div className="tittle-detail">
								<span>Contact</span>
								<h2>More Details</h2>
								<p>If you are looking for me, Please feel free contact me on my email.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="my-location">
							<div className="detail-share text-left mll-bottom">
								<div>
									<i className="la la-phone-volume"></i>
								</div>
								<div className="contact-title">
									<h5>Call Me here</h5>
									<p>+91-9142562743</p>
								</div>
							</div>
							<div className="detail-share text-left">
								<div>
								   <i className="la la-map-marker-alt"></i>
								</div>
								<div className="contact-title">
									<h5>Visit Office</h5>
									<p>Noida West UP (India).</p>
								</div>
							</div>
							<div className="detail-share text-left">
								<div>
									<i className="la la-envelope"></i>
								</div>
								<div className="contact-title">
									<h5>Email Us At</h5>
									<p>pradeep7384@gmail.com</p>
								</div>
							</div>
							<div className="detail-share text-left">
								<div>
									 <i className="la la-phone-volume"></i>
								</div>
								<div className="contact-title">
									<h5>Visit Office</h5>
									<p>Noida West UP (India)</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 ask-middle">
						<div className="comment-respond">
						
    					   </div>
							<form className="clearfix" action="contactus.php" method="post">
								
								<div className="col col-md-6">
									<input type="text" name="first_name" required className="form-control" placeholder="First Name.."/>
								</div>
								<div className="col col-md-6">
									<input type="text" className="form-control" name="last_name" required placeholder="Last Name.."/>
								</div>
								<div className="col col-xs-6">
									<input type="phohe" className="form-control" placeholder="Phone Number." name="mobile" required/>
								</div>

								<div className="col col-xs-6">
									<input type="email" className="form-control" placeholder="Email Address." name="email" required/>
								</div>
								<div className="col col-xs-12">
									<textarea className="form-control" placeholder="write your message or query here..." name="message"/>
								</div>
								<div className="col col-xs-12 submit-btn">
									<button type="submit">Send Message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
        </>
    )
}
export default ContactMe;