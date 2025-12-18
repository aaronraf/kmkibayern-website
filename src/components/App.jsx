import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Snowfall from "react-snowfall";
import Home from "./Home";
import Events from "./Events";
import About from "./About";
import "./App.css";
import i18n from "../i18n";

const App = () => {
	const month = new Date().getMonth();

	return (
		<Router>
			<div>
				{(month == 11 || month <= 1) && <Snowfall style={{
					position: "fixed",
					width: "100vw",
					height: "100vh"
				}} />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/events" element={<Events />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
