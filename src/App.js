import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Landing from "./pages/landing/Landing";
import Products from "./pages/products/Products";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import "./resources/styles/App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Profile from "./pages/profile/Profile";

const App = () => {
	const [user, setUser] = useState({});
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setLoggedIn(true);
			} else {
				setUser({});
				setLoggedIn(false);
			}
		});
	}, []);
	return (
		<BrowserRouter>
			<ToastContainer autoClose={3000} position="top-center" theme="dark" />
			<Header user={user} loggedIn={loggedIn} />
			<div className="content">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route
						path="/products"
						element={<Products user={user} loggedIn={loggedIn} />}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/signin" element={<Signin loggedIn={loggedIn} />} />
					<Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
					<Route path="/signup" element={<Signup loggedIn={loggedIn} />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
