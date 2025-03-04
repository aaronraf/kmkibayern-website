import React from "react";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import EventCalendar from "./elements/EventCalendar";

const Events = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Navbar activeLink="events" />
			<div className="content">
				<h1 className="header">{t("upcoming-events")}</h1>
				<EventCalendar />
			</div>
			<Footer />
		</div>
	);
};

export default Events;
