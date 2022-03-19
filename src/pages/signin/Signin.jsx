import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
	getAuth,
	setPersistence,
	signInWithEmailAndPassword,
	browserSessionPersistence,
} from "firebase/auth";
import LoadingButton from "@mui/lab/LoadingButton";

const auth = getAuth();
const Signin = ({ loggedIn }) => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.currentUser !== null) {
			navigate("/products");
		}
	}, [loggedIn, navigate]);

	const SignIn = (e) => {
		e.preventDefault();
		setIsLoading(true);

		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				return signInWithEmailAndPassword(
					auth,
					e.target.email.value,
					e.target.password.value
				);
			})

			.catch((error) => {
				setIsLoading(false);
				toast.error(error.code);
			});
	};

	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});

	return (
		<>
			<Fade>
				<div className="signin-container">
					<div className="signin">
						<div className="signin-form">
							<div className="text">
								<h1>Login To Make A Purchase </h1>
							</div>
							<form onSubmit={SignIn}>
								<div className="email-number">
									<input
										type="email"
										name="email"
										placeholder="Email address"
										className="email form-control"
										required
									/>

									<input
										type="password"
										name="password"
										placeholder="Password"
										className="password form-control"
										required
									/>
								</div>
								<div className="btn-container">
									<LoadingButton
										type="submit"
										loading={isLoading}
										variant="contained"
										className="btn-signin"
									>
										Login
									</LoadingButton>
								</div>

								<div className="other-links">
									<Link to="/reset" className="reset-link">
										Forgotten Password?
									</Link>
									<Link to="/signup" className="signup-link">
										No Account? Signup Here!
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Fade>
		</>
	);
};

export default Signin;
