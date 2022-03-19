import React, { useEffect, useState } from "react";
import logo from "../resources/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowUpCircle } from "react-icons/fi";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	MenuItem,
	Menu,
	Container,
	Avatar,
	Tooltip,
	IconButton,
} from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import app from "../config/fire";
import { toast } from "react-toastify";
import { Fade } from "react-reveal";
import CartModal from "./modals/CartModal";

const pages = [
	{ text: "About", path: "/about" },
	{ text: "Contact", path: "/contact" },
	{ text: "Products", path: "/products" },
];
const settings = [{ text: "Profile", path: "/profile" }, "Cart", "Logout"];
const Header = ({ user, loggedIn }) => {
	const navigate = useNavigate();
	const [toTop, setToTop] = useState(false);
	const auth = getAuth(app);

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);
	const [open, setOpen] = useState(false);

	const handleOpen = (d) => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleOpenNavMenu = (e) => {
		setAnchorElNav(e.currentTarget);
	};
	const handleOpenUserMenu = (e) => {
		setAnchorElUser(e.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const SetToTop = () => {
		const offset = document.documentElement.scrollTop;
		if (offset > 300) {
			setToTop(true);
		} else if (offset <= 300) {
			setToTop(false);
		}
	};

	const ScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", SetToTop);
		return () => {
			window.removeEventListener("scroll", SetToTop);
		};
	}, []);

	return (
		<AppBar
			position="fixed"
			sx={{
				transition: "all ease-in-out .3s ",
				height: { xs: "8vh", md: "10vh" },
				background: "#fefefe",
			}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						sx={{
							flexGrow: 0,
							height: "8vh",
							display: { xs: "none", md: "flex" },
						}}
					>
						<Link to="/">
							<Avatar
								alt="Remy Sharp"
								src={logo}
								sx={{ height: "100%", width: "auto" }}
							/>
						</Link>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							sx={{ color: "#ad0042" }}
						>
							<MenuIcon sx={{ fontSize: "30px" }} />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.text}
									onClick={() => {
										navigate(page.path);
										handleCloseNavMenu();
									}}
									sx={{ width: "100vw", color: "#ad0042" }}
								>
									<Typography textAlign="left">{page.text}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							height: "5vh",
							display: { xs: "flex", md: "none" },
						}}
					>
						<Link to="/">
							<Avatar
								alt="Remy Sharp"
								src={logo}
								sx={{ height: "100%", width: "auto" }}
							/>
						</Link>
					</Box>
					<Box
						sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: "10%" }}
					>
						{pages.map((page) => (
							<Link
								className="header-link"
								key={page.text}
								onClick={handleCloseNavMenu}
								to={page.path}
							>
								{page.text}
							</Link>
						))}
					</Box>

					{loggedIn ? (
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt={user.displayName} src={user.displayName} />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) =>
									setting === "Logout" ? (
										<MenuItem
											key={setting}
											onClick={() => {
												signOut(auth)
													.then(handleCloseUserMenu)
													.catch((error) => {
														toast.error(error.code);
													});
											}}
											sx={{ width: "30vw" }}
										>
											<Typography textAlign="center">{setting}</Typography>
										</MenuItem>
									) : setting === "Cart" ? (
										<MenuItem
											key={setting}
											onClick={() => {
												handleCloseUserMenu();
												handleOpen(true);
											}}
											sx={{ width: "30vw" }}
										>
											<Typography textAlign="center">{setting}</Typography>
										</MenuItem>
									) : (
										<MenuItem
											key={setting.text}
											onClick={() => {
												handleCloseUserMenu();
												navigate(`${setting.path}`);
											}}
											sx={{ width: "30vw", color: "#000000" }}
										>
											<Typography textAlign="center">{setting.text}</Typography>
										</MenuItem>
									)
								)}
							</Menu>
						</Box>
					) : (
						<Link className="login" to={"/signin"}>
							LOGIN
						</Link>
					)}
				</Toolbar>
			</Container>
			<Fade duration={1000} when={toTop}>
				<div className={toTop ? "uparrow show" : "hide"}>
					<FiArrowUpCircle onClick={ScrollToTop} />
				</div>
			</Fade>
			<CartModal open={open} handleClose={handleClose} user={user} />
		</AppBar>
	);
};

export default Header;
