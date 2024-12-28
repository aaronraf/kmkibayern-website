import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import EventCard from "./elements/EventCard";

const API_KEY = import.meta.env.VITE_CALENDAR_API_KEY;
const CALENDAR_ID = "ek9cbqb5rclm4hsn74t1kpibgg@group.calendar.google.com";

const UpcomingCalendarEvents = () => {
	const [events, setEvents] = useState([]);
	const [error, setError] = useState(null);

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
						loadEvents();
					})
					.catch((initError) => {
						console.error("API Initialization Error:", initError);
						setError("Failed to initialize Google API client.");
					});
			});
		};

		const loadEvents = async () => {
			try {
				const response = await gapi.client.calendar.events.list({
					calendarId: CALENDAR_ID,
					timeMin: new Date().toISOString(), // Fetch events starting from today
					showDeleted: false,
					singleEvents: true,
					maxResults: 16,
					orderBy: "startTime",
					key: API_KEY,
				});
				console.log("API Response:", response);
				const events = response.result.items;
				console.log("Fetched Events:", events);
				setEvents(events || []);
			} catch (error) {
				console.error("API Request Error:", error);
				if (error.result && error.result.error) {
					console.error("Detailed Error:", error.result.error);
					setError(`API Error: ${error.result.error.message}`);
				} else {
					setError("An error occurred while fetching events.");
				}
			}
		};

		initGapiClient();
	}, []);

	return (
		<div>
			<div className="events-container">
				{error && (
					<div className="error-message">
						<strong>Error: </strong>
						{error}
					</div>
				)}
				{events.length > 0 ? (
					events.map((event) => <EventCard key={event.id} event={event} />)
				) : (
					<p>No upcoming events.</p>
				)}
			</div>
		</div>
	);
};

export default UpcomingCalendarEvents;
