import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import CartItem from "../cartitem/CartItem";
import { doc, onSnapshot, getFirestore } from "firebase/firestore";
import app from "../../config/fire";
import { toast } from "react-toastify";
import CartSummary from "../cartitem/CartSummary";
const db = getFirestore(app);
const styles = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: { xl: "70vw", lg: "80vw", md: "90vw", xs: "95vw" },
	height: "90vh",
	background: "#ffffff",
	overflowY: "scroll",
	borderRadius: 1,
};

const CartModal = ({ user, open, handleClose }) => {
	const [data, setData] = useState(null);
	const GetData = () => {
		if (user.email) {
			onSnapshot(
				doc(db, "users", user.email),
				{ includeMetadataChanges: true },
				(doc) => {
					const source = doc.metadata.hasPendingWrites ? "Local" : "Server";

					if (source === "Server") {
						if (doc.data()) {
							setData(doc.data().cart);
						} else {
							toast.error("Unable To Get Cart Data Please Refresh");
						}
					}
				}
			);
		}
	};

	useEffect(GetData, [user]);

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box className="box" sx={styles}>
						<div
							onClick={handleClose}
							style={{
								fontSize: 40,
								position: "sticky",
								top: 1,
								left: "100%",
								textAlign: "right",
								background: "#ad0042",
								borderRadius: 70,
								padding: "0px 15px",
								cursor: "pointer",
								color: "#ffffff",
								zIndex: 999999,
								width: "fit-content",
							}}
							title="Close Cart"
						>
							&times;
						</div>
						<Box className="cart">
							<Typography variant="h4" align="center" m={"3%"}>
								CART ITEMS
							</Typography>
							<Box
								sx={{
									display: { sm: "block", md: "grid" },
									gridTemplateColumns: { md: "1fr 1fr" },
								}}
							>
								{data !== null ? (
									data.length !== 0 ? (
										data.map((item) => {
											return (
												<CartItem
													setData={setData}
													data={data}
													key={item.id}
													item={item}
												/>
											);
										})
									) : (
										<Typography variant="h5" align="center" m={"3%"}>
											No Item In Cart
										</Typography>
									)
								) : (
									<Typography variant="h5" align="center" m={"3%"}>
										No Item In Cart
									</Typography>
								)}
							</Box>
							<Box
								maxWidth="sm"
								sx={{
									m: "2% auto",
									p: "1% 2%",
									borderRadius: 1,
									boxShadow: 2,
								}}
							>
								<Typography variant="h4" align="center">
									Cart Summary
								</Typography>
								<CartSummary data={data} />
							</Box>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default CartModal;
