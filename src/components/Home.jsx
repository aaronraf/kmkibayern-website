import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./elements/Navbar";
import Hero from "./elements/Hero";
import Section from "./elements/Section";
import Footer from "./elements/Footer";
import EventCalendar from "./elements/EventCalendar";

const Home = () => {
	return (
		<div>
			<Navbar activeLink="home" />
			<Hero />
			<div className="content">
				<Section title={"past-events"} alignment={"center"} />
				<EventCalendar type="past" />
			</div>
			<div className="content">
				<Section title={"kolekte"} alignment={"center"} />
				<Container>
					<Row>
						<Col>placeholder qr paypal</Col>
						<Col>
							<p>
								“Peringatkanlah agar mereka itu berbuat baik, menjadi kaya dalam
								kebajikan, suka memberi dan membagi dan dengan demikian
								mengumpulkan suatu harta sebagai dasar yang baik bagi dirinya di
								waktu yang akan datang untuk mencapai hidup yang sebenarnya.”
							</p>
							<p>1 Timotius 6:17-19</p>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="sensus">
				<Section title={"sensus"} />
				<h5>Kamu anggota akitf KMKI Bayern? Jangan lupa pastikan kamu sudah isi Sensus ya!</h5>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
