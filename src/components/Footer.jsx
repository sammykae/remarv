import React from "react";

import { FaComments, FaPhone, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-top">
				<div className="footer-top-left">
					<div className="about">
						<h2>About US</h2>
					</div>
					<br />
					<p className="left-text">
						Remarv Foods Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Commodi, reprehenderit praesentium iusto odio neque sunt, quia
						repellendus sed dignissimos eveniet ipsam dolore. Delectus
						accusantium, tenetur aliquam quod quidem dolore labore!
					</p>
				</div>

				<div className="footer-top-middle">
					<h2>Reach Out To Us</h2>
					<div className="contact-info">
						<span>
							<FaPhone />
						</span>
						<a href="tel:+2349080949647">&nbsp;&nbsp;09080949647</a>
					</div>
					<div className="contact-info">
						<span>
							<FaPhone />
						</span>
						<a href="tel:+2348187583879">&nbsp;&nbsp;08187583879</a>
					</div>
					<div className="contact-info">
						<span>
							<FiMail />
						</span>
						<a href="mailto:remarv@gmail.com">&nbsp;&nbsp;remarv@gmail.com</a>
					</div>
					<div className="contact-info">
						<span>
							<FaComments />
						</span>
						<a
							target="_blank"
							rel="noreferrer"
							href=" https://wa.me/2349080949647"
						>
							&nbsp;&nbsp;Chat on Whatsapp
						</a>
					</div>
				</div>

				<div className="footer-top-right">
					<div className="social">
						<div>
							<a target={"_blank"} rel="noreferrer" href="/">
								<FaFacebook />
							</a>
						</div>

						<div>
							<a target={"_blank"} rel="noreferrer" href="/">
								<FaInstagram />
							</a>
						</div>
					</div>
					<div className="policy">policy</div>
				</div>
			</div>
			<div className="hr"></div>

			<div className="footer-bottom">
				<div className="copy">
					&copy; 2021. Remarv Foods. All Right Reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
