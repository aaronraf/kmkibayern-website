import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = ({ lang, handleLangChange }) => {
	return (
		<div>
			<Navbar lang={lang} onLangChange={handleLangChange} />
			<Hero lang={lang} />;
		</div>
	);
};

export default Home;
