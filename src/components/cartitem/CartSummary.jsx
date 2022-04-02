import { Typography, Box } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const CartSummary = ({ data }) => {
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

	let total = 0;
	if (data !== null && data.length !== 0) {
		data.map((d) => {
			return (total += d.price * d.qty);
		});
	}
	total = total.toLocaleString("en-NG", {
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
						<Button disabled={data.length === 0 ? true : false}>
							Checkout
						</Button>
					</span>
				</ThemeProvider>
			</Box>
		</Box>
	);
};

export default CartSummary;
