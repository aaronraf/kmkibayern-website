import React from "react";
import Navbar from "./elements/Navbar";
import Hero from "./elements/Hero";
import Footer from "./elements/Footer";

const Home = () => {
	return (
		<div>
			<Navbar activeLink="home" />
			<Hero />
			<Footer />
		</div>
	);
};

export default Home;
