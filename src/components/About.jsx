import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./elements/Navbar";
import Profile from "./elements/Profile";
import Footer from "./elements/Footer";
import db from "../assets/data/database-pk.json";

const About = () => {
	const { t } = useTranslation();
	const fotoPK = "../assets/images/pk-2425/pk-2425.png";

	return (
		<div>
			<Navbar activeLink="about" />
			<div className="content">
				{/* <h1 className="header">{t("about")}</h1>
				<div className="pk-img">
					<img src={fotoPK} alt="Panitia Kerja 2024/2025" />
					<p>Panitia Kerja KMKI Bayern Periode 2024/2025</p>
				</div>
				<div className="pk-sekarang">
					<h2>Panitia Kerja 2024/2025</h2>
					<Profile index={0} periode="2425" />
				</div>
				<div className="pk-lama"></div> */}

				<h1 className="construction-title">Site Under Construction</h1>
				<p className="construction-message">Please check back soon.</p>
			</div>
			<Footer />
		</div>
	);
};

export default About;
