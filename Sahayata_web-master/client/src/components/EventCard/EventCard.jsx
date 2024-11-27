import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const month = event.date.split("-")[1];
  return (
    <li>
      <div className="event-card">
        <img src='/images/event1.jpg' alt="sahayata" className="event-poster" />
        <time className="card-time" datetime="01-05">
          <span className="month">{event.month}</span>
          <span className="date">{month}</span>
        </time>

        <div className="wrapper">
          <div className="card-content">
            <p className="card-subtitle">{event.subtitle}</p>

            <h3 className="card-title">{event.title}</h3>

            <p className="card-text">{event.details}</p>
          </div>

          <Link to={`/event/${event.id}`}>
            <button className="btn btn-white">
              <span>View Events</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventCard;
