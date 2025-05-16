import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./elements/Navbar";
import Hero from "./elements/Hero";
import Paypal from "../assets/qr-paypal.png"
import Section from "./elements/Section";
import Footer from "./elements/Footer";
import EventCalendar from "./elements/EventCalendar";
import { Button } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

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
						<Col>
							<img className="paypal-img" src={Paypal} alt="placeholder qr paypal kolekte" />
						</Col>
						<Col className="paypal-col">
							<p>
								“Peringatkanlah agar mereka itu berbuat baik, menjadi kaya dalam
								kebajikan, suka memberi dan membagi dan dengan demikian
								mengumpulkan suatu harta sebagai dasar yang baik bagi dirinya di
								waktu yang akan datang untuk mencapai hidup yang sebenarnya.”
							</p>
							<p>1 Timotius 6:17-19</p>
							<Button
								variant="contained"
								startIcon={<VolunteerActivismIcon />}
								size="medium"
								target="_blank"
								// TODO: Ganti link PayPal pas Übergabe PK baru
								href="https://paypal.me/felixgunawan11">
								Kolekte Online via PayPal
							</Button>
						</Col>
					</Row>
					{/* <Row>
					</Row> */}
				</Container>
			</div>
			<div className="sensus">
				<Section title={"sensus"} />
				<h5>
					Kamu anggota akitf KMKI Bayern? Pastikan kamu sudah isi Sensus ya!
				</h5>
				<br />
				<Button
					variant="contained"
					startIcon={<AssignmentIcon />}
					size="medium"
					target="_blank"
					href="https://docs.google.com/forms/d/e/1FAIpQLSf-zqHk3eSzOWHRsV8REJIfGVhK4JBoD8-yRFwPXq03-iER2Q/viewform">
					Sensus KMKI Bayern
				</Button>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
