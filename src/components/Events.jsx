import React from "react";
import { Accordion } from "react-bootstrap";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

const Events = () => {
	return (
		<div>
			<Navbar activeLink="events" />
			<Footer />
		</div>
	);
};

export default Events;
