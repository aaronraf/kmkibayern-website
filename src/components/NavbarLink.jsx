/* eslint-disable react/prop-types */
import React from "react";
import { Col } from "react-bootstrap";

const NavbarLink = (props) => {
	const putImage = (src, alt) => {
		return (
			<div className="logo-container">
				<a href="#">
					<img className="logo-image" src={src} alt={alt} />
				</a>
			</div>
		);
	};

	const putListItem = (link, text) => {
		return (
			<ul>
				<li>
					<a href={link}>{text}</a>
				</li>
			</ul>
		);
	};

	const readerContent = (imgSrc, imgAlt, link, text) => {
		if (imgSrc) {
			return putImage(imgSrc, imgAlt);
		} else {
			return putListItem(link, text);
		}
	};

	return (
		<div className="navbar-link">
			<Col>
				{readerContent(props.imgSrc, props.imgAlt, props.link, props.text)}
			</Col>
		</div>
	);
};

export default NavbarLink;
