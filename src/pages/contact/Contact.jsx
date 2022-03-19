import React, { useState } from "react";
import { Fade } from "react-reveal";
import { FiMail } from "react-icons/fi";
import { GiSmartphone, GiClick } from "react-icons/gi";
import {
	FaMapMarkerAlt,
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaLinkedinIn,
	FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";
const Contact = () => {
	const [isLoading, setIsLoading] = useState(false);

	const submitEnquiry = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			toast.success("Enquiry Sent");
			e.target.name.value = "";
			e.target.email.value = "";
			e.target.subject.value = "";
			e.target.message.value = "";
			setIsLoading(false);
		}, 2500);
	};
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<Fade>
			<div className="contact-container">
				<div className="top">
					<h1>Contact &amp; Enquiry</h1>
				</div>
				<div className="contact-body">
					<div className="form">
						<h1>Make An Enquiry</h1>
						<form onSubmit={submitEnquiry}>
							<div className="name-email">
								<input
									className="form-control"
									type="text"
									placeholder="Your Full Name"
									name="name"
									id=""
									required
								/>
								<input
									className="form-control"
									type="email"
									placeholder="Your Email"
									name="email"
									id=""
									required
								/>
							</div>
							<input
								className="form-control"
								type="text"
								placeholder="Enquiry Subject"
								name="subject"
								id=""
								required
							/>
							<textarea
								className="form-control"
								rows="10"
								name="message"
								placeholder="Enquiry Body"
								id="message"
								required
							></textarea>
							<LoadingButton
								type="submit"
								loading={isLoading}
								variant="contained"
								sx={{
									backgroundColor: "#ad0042",
									boxShadow: "none",
									"&:hover": { backgroundColor: "#fcce33", boxShadow: "none" },
								}}
							>
								submit
							</LoadingButton>
						</form>
					</div>
					<div className="contacts">
						<h1>Get In touch With Us Today</h1>
						<div className="contact">
							<div className="contact-info">
								<div className="icon">
									<span>
										<GiSmartphone />
									</span>
								</div>

								<h3>Phone Number</h3>
								<a href="tel:+2348187583879">&nbsp;&nbsp;08187583879</a>
								<br />
								<a href="tel:+2349080949647">&nbsp;&nbsp;09080949647</a>
							</div>
							<div className="contact-info">
								<div className="icon">
									<span>
										<FiMail />
									</span>
								</div>
								<h3>Email Address</h3>
								<a href="mailto:remarv@gmail.com">
									&nbsp;&nbsp;remarv@gmail.com
								</a>
							</div>
							<div className="contact-info">
								<div className="icon">
									<span>
										<FaMapMarkerAlt />
									</span>
								</div>
								<h3>Address</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
							<div className="contact-info">
								<div className="icon">
									<span>
										<FaMapMarkerAlt />
									</span>
								</div>
								<h3>Pick Up Station</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
							<div className="contact-info">
								<div className="icon">
									<span>
										<GiClick />
									</span>
								</div>
								<h3>Join Our Community</h3>
								<div className="social">
									<Link to="#">
										<FaFacebook />
									</Link>
									<Link to="#">
										<FaInstagram />
									</Link>
									<Link to="#">
										<FaLinkedinIn />
									</Link>
									<Link to="#">
										<FaTwitter />
									</Link>
									<Link to="#">
										<FaYoutube />
									</Link>
								</div>
							</div>

							<div className="contact-info">
								<div className="icon">
									<span>
										<GiClick />
									</span>
								</div>
								<h3>Business Hours</h3>
								<p>Monday - Friday : 9am - 6pm</p>
								<p>Saturdays : 9am - 4pm</p>
								<p>Sundays : Closed</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Contact;
