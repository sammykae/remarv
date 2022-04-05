import { Typography, Box } from "@mui/material";
import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Payment from "../payment/Payment";
const CartSummary = ({ user, data }) => {
	const finalTheme = createTheme({
		components: {
			// Name of the component
			MuiButton: {
				styleOverrides: {
					// Name of the slot
					root: {
						// Some CSS
						fontSize: 20,
						m: "2% 0",
						width: "100%",
						color: "#000000",
						backgroundColor: "#fcce33",
						"&:hover": {
							color: "#ffffff",
							backgroundColor: "#ad0042",
						},
						"&.Mui-disabled": {
							backgroundColor: "#00000044",
							color: "#0000000",
							border: "none",

							"&:hover": {
								backgroundColor: "#00000044",
								color: "#000000",
								border: "none",
							},
						},
					},
				},
			},
		},
	});

	let pay = 0;
	if (data !== null && data.length !== 0) {
		data.map((d) => {
			return (pay += d.price * d.qty);
		});
	}

	//PayStack Config
	const config = {
		// reference: new Date().getTime().toString(),
		email: user !== null ? user.email : "test@gmail.com",
		amount: pay * 100,
	};

	let total = pay.toLocaleString("en-NG", {
		style: "currency",
		currency: "NGN",
	});

	return (
		<Box>
			<Typography variant="h6">
				Sub Total: <span>{total}</span>
			</Typography>
			<Typography variant="h6">
				Discount: <span>{total}</span>
			</Typography>
			<Box display={"flex"}>
				<Typography flexGrow={1} variant="h6">
					Delivery Fee:<span>{total}</span>
				</Typography>

				<Typography variant="h5" align="right">
					TOTAL: <span>{total}</span>
				</Typography>
			</Box>
			<Box
				sx={{
					m: "3% auto",
				}}
			>
				<ThemeProvider theme={finalTheme}>
					<span style={{ cursor: "not-allowed" }}>
						<Payment
							postSuccess={() => alert("Payment Successful")}
							config={config}
							data={data}
						/>
						{/* <Button disabled={data.length === 0 ? true : false}>
							Checkout
						</Button> */}
					</span>
				</ThemeProvider>
			</Box>
		</Box>
	);
};

export default CartSummary;
