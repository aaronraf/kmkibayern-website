import React from "react";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import logo from "../assets/kmkibayern-logo-whitebg.png";
import NavbarButton from "./NavbarButton";

const Navbar = ({ lang, onLangChange }) => {
	return (
		<header>
			<nav>
				<Container fluid>
					<div className="navbar">
						{/* Left: Logo */}
						<div className="navbar-left">
							<Col>
								<div className="logo-container">
									<a href="#">
										<img
											className="logo-image"
											src={logo}
											alt="KMKI Bayern logo"
										/>
									</a>
								</div>
							</Col>
						</div>

						{/* Center: Links */}
						<div className="navbar-center">
							<Link to="/" className="navbar-link">
								Home
							</Link>
							<Link to="/events" className="navbar-link">
								{lang === "en"
									? "Upcoming Events"
									: lang === "de"
									? "Kommende Veranstaltungen"
									: "Acara Selanjutnya"}
							</Link>
							<Link to="/about" className="navbar-link">
								{lang === "en"
									? "About Us"
									: lang === "de"
									? "Über uns"
									: "Tentang Kami"}
							</Link>
						</div>

						{/* Right: Language Buttons */}
						<div className="navbar-right">
							<NavbarButton name={"ID"} onClick={() => onLangChange("id")} />
							<NavbarButton name={"EN"} onClick={() => onLangChange("en")} />
							<NavbarButton name={"DE"} onClick={() => onLangChange("de")} />
						</div>
					</div>
				</Container>
			</nav>
		</header>
	);
};

export default Navbar;
