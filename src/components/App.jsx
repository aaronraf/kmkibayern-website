// import React from "react";
import Hero from "./Hero";
import "./App.css";
import Navbar from "./Navbar";

const langEN = false;
const langDE = false;

function setLanguage() {
	if (langEN) {
		return "en";
	} else if (langDE) {
		return "de";
	}
	return "id";
}

function App() {
	return (
		<div>
			<Navbar />
			<Hero lang={setLanguage()} />
		</div>
	);
}

export default App;
