import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();

	return (
		<section className="hero">
			<h1>KMKI Bayern</h1>
			<p>{t("hero-desc")}</p>
			<div className="hero-img"></div>
		</section>
	);
};

export default Hero;
