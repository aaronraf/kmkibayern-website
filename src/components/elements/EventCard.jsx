import React, { useEffect, useState } from "react";

const EventCard = ({ event }) => {
	// const [coordinates, setCoordinates] = useState(null);
	// const apiKey = import.meta.env.VITE_MAPBOX_API_KEY;

	// useEffect(() => {
	// 	const fetchCoordinates = async () => {
	// 		const address = encodeURIComponent(event.location);
	// 		const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${apiKey}`;

	// 		try {
	// 			const response = await fetch(geocodingUrl);
	// 			const data = await response.json();
	// 			if (data.features && data.features[0]) {
	// 				setCoordinates(data.features[0].center); // Longitude, Latitude
	// 			}
	// 		} catch (error) {
	// 			console.error("Error fetching geocoding data:", error);
	// 		}
	// 	};

	// 	if (event.location) {
	// 		fetchCoordinates();
	// 	}
	// }, [event.location]);

	// const getLocationImage = () => {
	// 	if (!coordinates) return ""; // No map if coordinates are unavailable
	// 	const baseUrl =
	// 		"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static";
	// 	return `${baseUrl}/pin-l-marker+285A98(${coordinates[0]},${coordinates[1]})/auto/600x300?access_token=${apiKey}`;
	// };

	return (
		<div className="event-card">
			<h3>{event.summary}</h3>
			{/* {event.location && (
				<img
					src={getLocationImage(event.location)}
					alt={`Map of ${event.location}`}
					style={{ width: "100%", height: "auto", borderRadius: "8px" }}
				/>
			)} */}
			<p>
				<strong>Mulai:</strong>{" "}
				{new Date(event.start.dateTime || event.start.date).toLocaleString()}
			</p>
			<p>
				<strong>Selesai:</strong>{" "}
				{new Date(event.end.dateTime || event.end.date).toLocaleString()}
			</p>
			<p>
				<strong>Lokasi:</strong> {event.location || "No location provided."}
			</p>
			<br />
			<p>{event.description || "No description provided."}</p>
		</div>
	);
};

export default EventCard;
