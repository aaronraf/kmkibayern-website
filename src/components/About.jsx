import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./elements/Navbar";
import Profile from "./elements/Profile";
import Footer from "./elements/Footer";
import fotoPK from "../assets/pk-2425/pk-2425.png";
import db from "../assets/database-pk.json";

const About = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Navbar activeLink="about" />
			<div className="content">
				<h1 className="header">{t("about")}</h1>
				<div className="pk-img">
					<img src={fotoPK} alt="Panitia Kerja 2024/2025" />
					<p>Panitia Kerja KMKI Bayern Periode 2024/2025</p>
				</div>
				<div className="pk-sekarang">
					<h2>Panitia Kerja 2024/2025</h2>
					<Profile index={0} imgFolderPath="2425" />
				</div>
				<div className="pk-lama"></div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
