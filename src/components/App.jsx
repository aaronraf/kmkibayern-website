import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./Home";
import "./App.css";
import i18n from "../i18n";

const App = () => {
	return (
		<Router basename="/kmkibayern-website">
			<div>
				<Routes>
					<Route
						path="/"
						element={
							<Home />
						}
					/>
					{/* 				TODO: create Events and About elements
				<Route path="/about" element={<About lang={language} />} /> */}
				</Routes>
			</div>
		</Router>
	);
};

export default App;
