import React from "react";
import { Col } from "react-bootstrap";

const NavbarButton = ({ name, onClick }) => {
	return (
		<Col>
			<a className="navbar-button" href="#" onClick={onClick}>{name}</a>
		</Col>
	);
};

export default NavbarButton;
