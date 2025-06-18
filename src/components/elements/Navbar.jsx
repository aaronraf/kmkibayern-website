import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/kmki-logo-biru.png";
// import NavbarButton from "./NavbarButton";
import { Link } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Navbar = ({ activeLink }) => {
	const { t, i18n } = useTranslation();
	const [menuOpen, setMenuOpen] = React.useState(false);

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	const menuHandler = () => {
		setMenuOpen(!menuOpen);
	};

	const linkHandler = () => {
		setMenuOpen(false);
	};

	React.useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => document.body.classList.remove("no-scroll");
	}, [menuOpen]);

	return (
		<header>
			<nav>
				<Container fluid>
					<div className="navbar">
						{/* Left: Logo */}
						<div className="navbar-left">
							<Link to="/" onClick={linkHandler}>
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
							</Link>
						</div>

						{/* Center: Links */}
						<div className={`navbar-center ${menuOpen ? "show" : ""}`}>
							<Link
								to="/"
								className="navbar-link"
								id={activeLink === "home" && "active"}
								onClick={linkHandler}>
								Home
							</Link>
							<Link
								to="/events"
								className="navbar-link"
								id={activeLink === "events" && "active"}
								onClick={linkHandler}>
								{t("upcoming-events")}
							</Link>
							<Link
								to="/about"
								className="navbar-link"
								id={activeLink === "about" && "active"}
								onClick={linkHandler}>
								{t("about")}
							</Link>
						</div>

						{/* Right: Language Buttons or Hamburger Menu */}
						{/* <div className="navbar-right">
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
						</div> */}
						<div className="hamburger" onClick={menuHandler}>
							<div className={`bar ${menuOpen ? "active" : ""}`}></div>
							<div className={`bar ${menuOpen ? "active" : ""}`}></div>
							<div className={`bar ${menuOpen ? "active" : ""}`}></div>
						</div>

						{/* Hamburger Overlay */}
						{menuOpen && <div className="overlay" onClick={linkHandler}></div>}
					</div>
				</Container>
			</nav>
		</header>
	);
};

Navbar.propTypes = {
	activeLink: PropTypes.oneOf(["home", "events", "about"]),
};

export default Navbar;
