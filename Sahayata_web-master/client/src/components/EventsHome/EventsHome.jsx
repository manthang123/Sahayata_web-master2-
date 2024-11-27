import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../EventCard/EventCard";
import "./style.css";

const EventHome = () => {
  useEffect(() => {
    eventDetails();
  }, []);

  // const handleAddEventClick = () => {
  //   // Navigate to the "Add Event" page, where the form is rendered
  //   // const handleAddEventClick = () => {
  //   //   // Redirect to backend route that renders the form.ejs
  //   window.location.href = "http://localhost:5000/events/new"; // This is where your form is rendered by backend
  //   // };
  //   //navigate('/events/new');
  // };
  const [eventData, setEventData] = useState();
  const eventDetails = async (e) => {
    // try {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => setEventData(data))
      .catch((error) => console.error("Error fetching events:", error));
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("There was an error creating the event.");
    // }
  };
  return (
    <section class="section event" id="event">
      <div class="container">
        <p class="section-subtitle">
          <img
            src="/images/subtitle-img-green.png"
            width="32"
            height="7"
            alt="Wavy line"
          />

          <span>Event & Program</span>

          <img
            src="/images/subtitle-img-green.png"
            width="32"
            height="7"
            alt="Wavy line"
          />
        </p>

        <h2 class="h2 section-title">
          Our Most Popular Causes For <strong>Building Fund & Community</strong>
        </h2>

        <ul class="event-list">
          {eventData?.slice(0, 4)?.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </ul>

        <Link to="/events">
          <button class="btn btn-secondary">
            <span>Check all Events</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EventHome;
