import React from "react";
import EventItem from "../components/EventItem";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

export const eventDetailLoader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch event details" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

export const eventDetailAction = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete this event!" },
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
};

function EventDetailPage() {
  const event = useRouteLoaderData("event-detail").event;

  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export default EventDetailPage;
