import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./App.css";

const App = () => {
	const [language, setLanguage] = useState("id");

	const handleLangChange = (newLang) => {
		setLanguage(newLang);
	};

	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" exact>
						<Home lang={language} handleLangChange={handleLangChange}/>
					</Route>
					<Route path="/about"></Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
