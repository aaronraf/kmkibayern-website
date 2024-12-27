import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const API_KEY = import.meta.env.VITE_API_KEY;
const CALENDAR_ID = "ek9cbqb5rclm4hsn74t1kpibgg@group.calendar.google.com";

const PastEvents = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const initGapiClient = () => {
			gapi.load("client", () => {
				gapi.client
					.init({
						apiKey: API_KEY,
						discoveryDocs: [
							"https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
						],
					})
					.then(() => {
						loadPastEvents();
					});
			});
		};

		const loadPastEvents = async () => {
			try {
				const currentDate = new Date();
				const oneMonthAgo = new Date();
				oneMonthAgo.setMonth(currentDate.getMonth() - 1);

				// Format dates to ISO string
				const timeMax = currentDate.toISOString();
				const timeMin = oneMonthAgo.toISOString();

				const response = await gapi.client.calendar.events.list({
					calendarId: CALENDAR_ID,
					timeMax, // Fetch events up to today
					timeMin, // Fetch events from the past month
					showDeleted: false,
					singleEvents: true,
					maxResults: 4,
					orderBy: "startTime",
					key: API_KEY,
				});
				console.log("Past events response:", response);
				const events = response.result.items;
				setEvents(events || []);
			} catch (error) {
				console.error("API Error:", error);
				if (error.result) {
					console.error("Detailed Error:", error.result.error);
				}
			}
		};

		initGapiClient();
	}, []);

	return (
		<div>
			<div className="events-container">
				{events.length > 0 ? (
					events.map((event) => (
						<div key={event.id} className="event-card">
							<h3>{event.summary}</h3>
							<p>
								<strong>Start:</strong>{" "}
								{new Date(
									event.start.dateTime || event.start.date
								).toLocaleString()}
							</p>
							<p>
								<strong>End:</strong>{" "}
								{new Date(
									event.end.dateTime || event.end.date
								).toLocaleString()}
							</p>
							<p>
								<strong>Location:</strong>{" "}
								{event.location || "No location provided."}
							</p>
						</div>
					))
				) : (
					<p>No past events found.</p>
				)}
			</div>
		</div>
	);
};

export default PastEvents;
