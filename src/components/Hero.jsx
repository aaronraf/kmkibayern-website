/* eslint-disable react/prop-types */
import React from "react";
import logo from "../assets/kmkibayern-logo-whitebg.png";

const Hero = ({ lang }) => {
	const displayLanguage = (languageSetting) => {
		switch (languageSetting) {
			case "en":
				return "Indonesian Catholic Student Family in Bavaria";

			case "de":
				return "Indonesischer Katolischer Studentengemeinde in Bayern";

			default:
				return "Keluarga Mahasiswa Katolik Indonesia di Bayern";
		}
	};

	return (
		<div className="hero">
			<h1>KMKI Bayern</h1>
			<p>{displayLanguage(lang)}</p>
		</div>
	);
};

export default Hero;
