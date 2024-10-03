/* eslint-disable react/prop-types */
// import React from "react";
import logo from "../assets/kmkibayern-logo-whitebg.png";

function displayLanguage(lang) {
	switch (lang) {
		case "en":
			return "Indonesian Catholic Student Family in Bavaria";

		case "de":
			return "Indonesischer Katolischer Studentengemeinde in Bayern";

		default:
			return "Keluarga Mahasiswa Katolik Indonesia di Bayern";
	}
}

function Hero(props) {
	return (
		<div className="hero">
			<h1>KMKI Bayern</h1>
			<p>{displayLanguage(props.lang)}</p>
		</div>
	);
}

export default Hero;
