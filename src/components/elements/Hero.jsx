import React from "react";
import img from "../../assets/hero-img.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();

	return (
		<section className="hero">
			<div className="hero-content">
				<h1>KMKI Bayern</h1>
				<p>{t("kmki-desc")}</p>
			</div>
			<div className="hero-img">
				<img src={img} alt="School of Horrors 2024" />
			</div>
		</section>
	);
};

export default Hero;
