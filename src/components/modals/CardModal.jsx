import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const styles = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 300,
	boxShadow: "1px 1px 15px #ad0042",
};

const CardModal = ({ open, handleClose, data }) => {
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
					<Box sx={styles}>
						<div
							onClick={handleClose}
							style={{
								fontSize: 40,
								position: "absolute",
								top: -25,
								right: -15,
								background: "#ad0042",
								borderRadius: 70,
								padding: "0px 15px",
								cursor: "pointer",
								color: "#ffffff",
							}}
						>
							&times;
						</div>
						<img src={data} alt="data" />
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default CardModal;
