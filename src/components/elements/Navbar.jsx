import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import logo from "../../assets/kmki-logo-biru.png";
import NavbarButton from "./NavbarButton";

const Navbar = ({ activeLink }) => {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

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
							<Link
								to="/"
								className="navbar-link"
								id={activeLink === "home" && "active"}>
								Home
							</Link>
							<Link
								to="/events"
								className="navbar-link"
								id={activeLink === "events" && "active"}>
								{t("upcoming-events")}
							</Link>
							<Link
								to="/about"
								className="navbar-link"
								id={activeLink === "about" && "active"}>
								{t("about")}
							</Link>
						</div>

						{/* Right: Language Buttons */}
						<div className="navbar-right">
							<NavbarButton
								name={"ID"}
								onClick={() => changeLanguage("id")}
								isActive={i18n.language === "id"}
							/>
							<NavbarButton
								name={"EN"}
								onClick={() => changeLanguage("en")}
								isActive={i18n.language === "en"}
							/>
							<NavbarButton
								name={"DE"}
								onClick={() => changeLanguage("de")}
								isActive={i18n.language === "de"}
							/>
						</div>
					</div>
				</Container>
			</nav>
		</header>
	);
};

export default Navbar;
