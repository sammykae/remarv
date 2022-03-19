import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AddShoppingCart } from "@mui/icons-material";
import CardModal from "../modals/CardModal";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore";
import app from "../../config/fire";
import { LoadingButton } from "@mui/lab";
const db = getFirestore(app);
const ItemCard = ({ user, item, loggedIn }) => {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleOpen = (d) => {
		setData(d);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const AddToCart = async (cartid) => {
		setLoading(true);
		var isIn = false;
		var cart;
		if (loggedIn) {
			await getDoc(doc(db, "users", user.email))
				.then((docSnap) => {
					cart = docSnap.data().cart;
					cart.forEach((element) => {
						if (element.id === cartid) {
							isIn = true;
						}
					});

					isIn
						? (() => {
								toast.info("Item Already In Cart");
								setLoading(false);
						  })()
						: setDoc(
								doc(db, "users", user.email),
								{
									cart: [
										...cart,
										{
											id: item.id,
											name: item.name,
											qty: "1",
											price: item.price,
											img_url: item.img_url,
										},
									],
								},
								{ merge: true }
						  )
								.then(() => {
									toast.success("Item Added to Cart");
									setLoading(false);
								})
								.catch((error) => {
									setLoading(false);
									toast.error(error.code);
								});
				})
				.catch((error) => {
					toast.error(`${error.code}. Try Again.`);
				});
		} else {
			navigate("/signin");
		}
	};
	return (
		<>
			<Card
				sx={{
					boxShadow: "1px 1px 10px grey",
					maxWidth: { xs: 350 },
					m: { xs: "5% auto", sm: " 3% 0" },
				}}
			>
				<div>
					<img
						height="250"
						width="100%"
						alt="card-img"
						onClick={() => handleOpen(item.img_url)}
						src={item.img_url}
						style={{
							cursor: "pointer",
						}}
					/>
				</div>

				<CardContent sx={{ p: "2%", borderTop: "1px solid grey" }}>
					<Typography variant="h6" color="text.secondary">
						{item.name}
					</Typography>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Typography variant="h6" color="text" sx={{ flexGrow: 1 }}>
							Price: &nbsp;&#8358;{item.price}
						</Typography>
						{loading ? (
							<LoadingButton size="medium" loading={loading} />
						) : (
							<IconButton onClick={() => AddToCart(item.id)}>
								<AddShoppingCart
									sx={{ fontSize: "35px", color: "#ad0042" }}
									titleAccess="Add to Cart"
								/>
							</IconButton>
						)}
					</Box>
				</CardContent>

				<CardModal open={open} handleClose={handleClose} data={data} />
			</Card>
		</>
	);
};

export default ItemCard;
