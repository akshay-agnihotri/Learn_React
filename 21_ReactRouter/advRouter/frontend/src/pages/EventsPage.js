import React from "react";
import { NavLink } from "react-router-dom";
const DUMMYEVENTS = [
  {
    id: "e1",
    name: "teachers-day",
    place: "rajnagar",
    date: "27 may 2024",
    time: "6pm",
  },
  {
    id: "e2",
    name: "independenceDay",
    place: "kalyanpur",
    date: "15 aug 2024",
    time: "8am",
  },
  {
    id: "e3",
    name: "rakshaBandhan",
    place: "bithoor",
    date: "15 aug 2024",
    time: "9:45am",
  },
];
function EventsPage() {
  return (
    <div>
      <ul>
        {DUMMYEVENTS.map((event) => (
          <li key={event.id}>
            <NavLink to={`/events/${event.id}`}>
              <h2>{event.name}</h2>
              <p>{event.place}</p>
              <p>{event.date}</p>
              <p>{event.time}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;
