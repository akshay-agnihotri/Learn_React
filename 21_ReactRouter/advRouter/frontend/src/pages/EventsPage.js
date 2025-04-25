import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "could not fetch events" }), {
    //   status: 500,
    // });
    throw json({ message: "could not fetch events" }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData;
    return response;
  }
};

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
