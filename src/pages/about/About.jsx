import React from "react";
import Fade from "react-reveal/Fade";
const About = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<Fade>
			<div className="about-container">About page</div>
		</Fade>
	);
};

export default About;
