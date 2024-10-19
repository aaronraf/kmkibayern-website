import React from "react";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import { Accordion } from "react-bootstrap";

const Events = () => {
	return (
		<div>
			<Navbar activeLink="events" />
			<Footer />
		</div>
	);
};

export default Events;
