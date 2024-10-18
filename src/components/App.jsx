import React, { useState } from "react";
import Hero from "./Hero";
import "./App.css";
import Navbar from "./Navbar";

const App = () => {
	const [language, setLanguage] = useState("id");

	const handleLangChange = (newLang) => {
		setLanguage(newLang);
	};

	return (
		<div>
			<Navbar currentLang={language} onLangChange={handleLangChange} />
			<Hero lang={language} />
		</div>
	);
};

export default App;
