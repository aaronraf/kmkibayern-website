import React from "react";
import PropTypes from "prop-types";
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

NavbarButton.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isActive: PropTypes.bool,
};

export default NavbarButton;
