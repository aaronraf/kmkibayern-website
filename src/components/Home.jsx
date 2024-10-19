import React from "react";
import Navbar from "./elements/Navbar";
import Hero from "./elements/Hero";

const Home = () => {
	return (
		<div>
			<Navbar activeLink="home" />
			<Hero />
		</div>
	);
};

export default Home;
