import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "could not fetch events" }), {
    //   status: 500,
    // });
    throw json({ message: "could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const eventsLoader = () => {
  return defer({
    events: loadEvents(),
  });
};

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>loading....</p>}>
        <Await resolve={events}>
          {(loadedEvents) => {
            return <EventsList events={loadedEvents} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;
