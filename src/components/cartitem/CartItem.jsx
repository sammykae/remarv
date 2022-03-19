import { Delete } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import app from "../../config/fire";
import { Button, ButtonGroup } from "@mui/material";
const auth = getAuth(app);
const db = getFirestore(app);

const CartItem = ({ data, item }) => {
	const finalTheme = createTheme({
		components: {
			// Name of the component
			MuiButton: {
				styleOverrides: {
					// Name of the slot
					root: {
						// Some CSS
						backgroundColor: "#ad0042",
						color: "#ffffff",
						border: "none",
						"&:hover": {
							backgroundColor: "#ad0042c5",
							color: "#ffffff",
							border: "none",
						},
						"&.Mui-disabled": {
							backgroundColor: "#00000044",
							color: "#ad0042",
							border: "none",

							"&:hover": {
								backgroundColor: "#00000044",
								color: "#ad0042",
								border: "none",
							},
						},
					},
				},
			},
		},
	});

	const handleDelete = async (itemid) => {
		var newData = data.filter((d) => {
			return d.id !== itemid;
		});

		await setDoc(
			doc(db, "users", auth.currentUser.email),
			{
				cart: newData,
			},
			{ merge: true }
		)
			.then(() => {
				toast.success("Item Deleted From Cart");
			})
			.catch((error) => {
				toast.error(error.code);
			});
	};

	const Add = async (itemid) => {
		var newData = data.map((d) => {
			if (d.id === itemid) {
				return { ...d, qty: String(Number(d.qty) + 1) };
			} else {
				return d;
			}
		});

		await setDoc(
			doc(db, "users", auth.currentUser.email),
			{
				cart: newData,
			},
			{ merge: true }
		)
			.then(() => {})
			.catch((error) => {
				toast.error(error.code);
			});
	};
	const Sub = async (itemid) => {
		var newData = data.map((d) => {
			if (d.id === itemid && d.qty > 1) {
				return { ...d, qty: String(Number(d.qty) - 1) };
			} else {
				return d;
			}
		});

		await setDoc(
			doc(db, "users", auth.currentUser.email),
			{
				cart: newData,
			},
			{ merge: true }
		)
			.then(() => {})
			.catch((error) => {
				toast.error(error.code);
			});
	};
	return (
		<Box
			sx={{
				m: "2%",
				p: "2%",
				borderRadius: 2,
				boxShadow: "1px 1px 5px grey",
			}}
		>
			<Box>
				<Box sx={{ display: "flex", m: "2% 0 " }}>
					<div
						style={{
							borderRadius: "50px",
							border: "1px solid #ad0042",
							padding: "3px",
						}}
					>
						<Avatar sx={{ height: "50px", width: "auto" }} src={item.img_url} />
					</div>
					<Typography
						sx={{ ml: "5%", alignSelf: "center", flexGrow: 1 }}
						variant="h6"
						color="text.secondary"
					>
						{item.name}
					</Typography>
					<Typography sx={{ alignSelf: "center" }} variant="h6" color="text">
						&#8358; {item.price}
					</Typography>
				</Box>

				<Box
					className="actions"
					sx={{ display: "flex", flexDirection: "row", width: "100%" }}
				>
					<Box sx={{ alignSelf: "center", flexGrow: 1 }}>
						<ButtonGroup>
							<ThemeProvider theme={finalTheme}>
								<span style={{ cursor: "not-allowed" }}>
									<Button
										onClick={() => {
											Sub(item.id);
										}}
										disabled={item.qty <= 1 ? true : false}
									>
										-
									</Button>
								</span>
							</ThemeProvider>

							<Typography
								variant="h6"
								style={{ alignSelf: "center", margin: "0 3%" }}
							>
								{item.qty}
							</Typography>
							<ThemeProvider theme={finalTheme}>
								<Button
									onClick={() => {
										Add(item.id);
									}}
									// sx={styles}
								>
									+
								</Button>
							</ThemeProvider>
						</ButtonGroup>
					</Box>

					<IconButton
						onClick={() => handleDelete(item.id)}
						sx={{ alignSelf: "center", color: "#ad0042" }}
					>
						<Delete sx={{ fontSize: 30 }} />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

export default CartItem;
