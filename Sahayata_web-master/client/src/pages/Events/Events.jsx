import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventCard } from "../../components";
//import { eventsData } from "../../data/data";

const Events = () => {
  const navigate = useNavigate();

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
  //console.log(eventData[1]?.title);
  return (
    <>
      <div className="page">
        <section
          className="section event"
          id="event"
          style={{ marginTop: "-60px" }}
        >
          <div className="container">
            <p className="section-subtitle">
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

            <h2 className="h2 section-title">
              Our Most Popular Causes For <strong>Building Fund</strong>
            </h2>

            <ul className="event-list">
              {eventData?.map((event) => {
                return <EventCard key={event.id} event={event} />;
              })}
            </ul>
          </div>
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <a href="/event/new">
            <button type="submit" className="btn btn-secondary">
              Add Event
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Events;
