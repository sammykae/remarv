import React from "react";
import Hero from "../../components/landing/Hero";
import Why from "../../components/landing/Why";
import Faq from "../../components/landing/faq/Faq";

import Fade from "react-reveal/Fade";
const Landing = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<Fade>
			<div className="landing-container">
				<Hero />
				<Why />
				<Faq />
			</div>
		</Fade>
	);
};

export default Landing;
