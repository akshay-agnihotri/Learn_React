import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

export const newEventAction = async ({ request, params }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    description: data.get("description"),
    date: data.get("date"),
    image: data.get("image"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new json({ message: "could not save data" }, { status: 500 });
  }

  return redirect("/events");
};

function NewEventPage() {
  return (
    <>
      <EventForm method="POST"/>
    </>
  );
}

export default NewEventPage;
