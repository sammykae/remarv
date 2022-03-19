import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import ItemCard from "../../components/card/ItemCard";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Typography } from "@mui/material";
import app from "../../config/fire";
import { toast } from "react-toastify";
const db = getFirestore(app);
const Products = ({ user, loggedIn }) => {
	const [data, setData] = useState(null);

	const GetData = async () => {
		await getDoc(doc(db, "products", "items"))
			.then((docSnap) => {
				setData(docSnap.data());
			})
			.catch((error) => {
				toast.error(`${error.code}. Try Again.`);
			});
	};

	useEffect(() => {
		GetData();
	}, []);
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	if (data === null) {
		return <div className="lds-dual-ring"></div>;
	} else
		return (
			<Fade>
				<div className="products-container">
					<Typography variant="h4" className="title">
						PALM OIL
					</Typography>
					<div className="product">
						{data !== null
							? data.palm_oil.map((item) => {
									return (
										<ItemCard
											key={item.id}
											user={user}
											item={item}
											loggedIn={loggedIn}
										/>
									);
							  })
							: null}
					</div>

					<Typography variant="h4" className="title">
						HONEY
					</Typography>
					<div className="product">
						{data !== null
							? data.honey.map((item) => {
									return (
										<ItemCard
											key={item.id}
											user={user}
											item={item}
											loggedIn={loggedIn}
										/>
									);
							  })
							: null}
					</div>
				</div>
			</Fade>
		);
};

export default Products;
