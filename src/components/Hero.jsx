import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();

	return (
		<div className="hero">
			<h1>KMKI Bayern</h1>
			<p>{t("hero-desc")}</p>
		</div>
	);
};

export default Hero;
