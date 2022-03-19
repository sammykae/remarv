import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link, useNavigate } from "react-router-dom";
import app from "../../config/fire";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
const auth = getAuth(app);
const db = getFirestore(app);

const Signup = ({ loggedIn }) => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.currentUser !== null) {
			navigate("/products");
		}
	}, [loggedIn, navigate]);

	const UserData = async (e) => {
		await setDoc(doc(db, "users", e.target.email.value), {
			contact: {
				name: e.target.name.value,
				phone: e.target.phone.value,
				email: e.target.email.value,
			},
			cart: [],
		});
	};
	const SignUp = (e) => {
		e.preventDefault();
		setIsLoading(true);

		if (e.target.password.value === e.target.repassword.value) {
			createUserWithEmailAndPassword(
				auth,
				e.target.email.value,
				e.target.password.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: e.target.username.value,
					}).then(UserData(e));
				})
				.catch((error) => {
					setIsLoading(false);
					toast.error(error.code);
				});
		} else {
			toast.error("Password Does Not Match");
			setIsLoading(false);
		}
	};
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	return (
		<>
			<Fade duration={1500}>
				<div className="signup-container">
					<div className="signup">
						<div className="signup-form">
							<div className="text">
								<h1>Sign Up For Quality Products from Remarv Foods</h1>
							</div>
							<form onSubmit={SignUp}>
								<div className="input-container">
									<input
										type="text"
										name="name"
										placeholder="Your Full Name"
										className="firstname form-control"
										required
									/>
									<input
										type="text"
										name="username"
										placeholder="Enter a username"
										className="email form-control"
										required
									/>
								</div>
								<div className="input-container">
									<input
										type="tel"
										name="phone"
										placeholder="Your phone number"
										className="phone form-control"
										maxLength="11"
										required
									/>

									<input
										type="email"
										name="email"
										placeholder="Your email address"
										className="email form-control"
										required
									/>
								</div>
								<div className="input-container">
									<input
										type="password"
										name="password"
										placeholder="Pasword"
										className="password form-control"
										required
									/>
									<input
										type="password"
										name="repassword"
										placeholder="Confirm Pasword"
										className="password form-control"
										required
									/>
								</div>

								<div className="btn-container">
									<LoadingButton
										type="submit"
										loading={isLoading}
										variant="contained"
										className="btn-signup"
									>
										signup
									</LoadingButton>
								</div>

								<Link to="/signin" className="signin-link">
									Have An Account? Sign In Here!
								</Link>
							</form>
						</div>
					</div>
				</div>
			</Fade>
		</>
	);
};

export default Signup;
