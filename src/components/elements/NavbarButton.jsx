import React from "react";
import { Col } from "react-bootstrap";

const NavbarButton = ({ name, onClick, isActive }) => {
	return (
		<Col>
			<a
				className="navbar-button"
				id={isActive && "active"}
				href="#"
				onClick={onClick}>
				{name}
			</a>
		</Col>
	);
};

export default NavbarButton;
