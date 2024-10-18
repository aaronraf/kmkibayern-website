import React from "react";
import { Col } from "react-bootstrap";

const NavbarButton = ({ name, onClick }) => {
	return (
		<Col>
			<button onClick={onClick}>{name}</button>
		</Col>
	);
};

export default NavbarButton;
