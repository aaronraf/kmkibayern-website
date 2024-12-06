import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import fotoPK from "../assets/PK-24-25.png"

const About = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Navbar activeLink="about" />
			<div className="heading-pk">
				<h1>{t("about")}</h1>
				<div className="pk-img">
					<img src={fotoPK} alt="Panitia Kerja 2024/2025" />
					<p>Panitia Kerja KMKI Bayern Periode 2024/2025</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
