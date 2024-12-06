import React from "react";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import CalendarEvents from "./UpcomingCalendarEvents";

const Events = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Navbar activeLink="events" />
			<div className="">
				<h1>{t("upcoming-events")}</h1>
				<CalendarEvents />
			</div>
			<Footer />
		</div>
	);
};

export default Events;
