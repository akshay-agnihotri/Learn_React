import React from "react";
// Output the ID of the selected event on the EventDetailPage
import { Link, useParams } from "react-router-dom";

function EventDetailPage() {
  const eventId = useParams().id;
  return (
    <div>
      <h1>EventDetailPage</h1>
      <p>Event ID:{eventId}</p>
      <Link to={`/events/${eventId}/edit`}>Edit Event</Link>
    </div>
  );
}

export default EventDetailPage;
