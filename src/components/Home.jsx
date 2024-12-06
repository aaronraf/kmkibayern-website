import React from "react";
import Navbar from "./elements/Navbar";
import Hero from "./elements/Hero";
import Section from "./elements/Section";
import Footer from "./elements/Footer";

const Home = () => {
	return (
		<div>
			<Navbar activeLink="home" />
			<Hero />
			<Section title={"past-events"} alignment={"center"}/>
			<Footer />
		</div>
	);
};

export default Home;
