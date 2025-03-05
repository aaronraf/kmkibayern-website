import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import EventCard from "./EventCard";

const API_KEY = import.meta.env.VITE_API_KEY;
const CALENDAR_ID = "ek9cbqb5rclm4hsn74t1kpibgg@group.calendar.google.com";

const EventCalendar = ({ type = "future", limit = 8 }) => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			try {
				const currentDate = new Date();
				let timeMin, timeMax;

				if (type === "past") {
					const oneMonthAgo = new Date();
					oneMonthAgo.setMonth(currentDate.getMonth() - 3);
					timeMin = oneMonthAgo.toISOString();
					timeMax = currentDate.toISOString();
				} else if (type === "future") {
					timeMin = currentDate.toISOString();
				}

				const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}${
					timeMax ? `&timeMax=${timeMax}` : ""
				}&singleEvents=true&orderBy=startTime&maxResults=${limit}`;
				const response = await fetch(url);
				const data = await response.json();

				if (data.items) {
					setEvents(data.items);
				} else {
					setEvents([]);
				}
			} catch (error) {
				console.error("API Error:", error);
				if (error.result) {
					console.error("Detailed Error:", error.result.error);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, [type, limit]);

	return (
		<div>
			<div className="events-container">
				{loading ? (
					<p>Loading events...</p>
				) : events.length > 0 ? (
					events.map((event) => <EventCard key={event.id} event={event} />)
				) : (
					<p>No {type == "past" ? "past" : "upcoming"} events.</p>
				)}
			</div>
		</div>
	);
};

EventCalendar.propTypes = {
	type: PropTypes.oneOf(["past", "future"]),
	limit: PropTypes.number,
};

export default EventCalendar;
