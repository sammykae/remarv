import React from "react";
import { Button } from "@mui/material";
import { usePaystackPayment } from "react-paystack";
const publicKey = "pk_test_1e26f210a2fffc5882c466b658f05b34e979fbe2";

const Payment = ({ config, data, postSuccess }) => {
	const initializePayment = usePaystackPayment({ ...config, publicKey });
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		// console.log("closed");
	};
	const onSuccess = (reference) => {
		postSuccess();
		// console.log(reference);
	};
	return (
		<div
			onClick={() => {
				initializePayment(onSuccess, onClose);
			}}
		>
			<Button disabled={data.length === 0 ? true : false}>Checkout</Button>
		</div>
	);
};

export default Payment;
