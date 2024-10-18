import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";

const App = () => {
	const [language, setLanguage] = useState("id");

	const handleLangChange = (newLang) => {
		setLanguage(newLang);
	};

	return (
		<Router basename="/kmkibayern-website">
			<div>
				<Routes>
				<Route path="/" element={<Home lang={language} handleLangChange={handleLangChange} />} />
{/* 				TODO: create Events and About elements
				<Route path="/about" element={<About lang={language} />} /> */}
				</Routes>
			</div>
		</Router>
	);
};

export default App;
