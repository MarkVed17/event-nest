import React from "react";
import { useEventInfo } from "../../contexts";
import "./EventPage.css";

const EventPage = () => {
  const { eventInfo } = useEventInfo();
  const { name, start, end, url, location, description } = eventInfo;

  return (
    <div className="main-content">
      <div className="event-wrapper">
        <img src="/assets/event-img.svg" alt="event-banner" />
        <div className="event-top">
          <h1 className="event-name">{name}</h1>
          <h3 className="event-secondary-text">Hosted by Guest</h3>
        </div>

        <div className="event-main">
          <div className="event-specifics">
            <img src="/assets/calendar.svg" alt="calendar" />
            <div className="event-date">
              <p className="start-date">
                {start.format("Do MMMM YYYY hh:mm A")}
              </p>
              {end && (
                <p className="end-date">
                  <span>to </span>
                  {end.format("Do MMMM YYYY hh:mm A")}
                </p>
              )}
            </div>
            <img src="/assets/arrow.svg" alt="arrow" className="arrow-icon" />
          </div>
          {location && (
            <div className="event-specifics">
              <img src="/assets/location.svg" alt="location" />
              <p className="event-date">{location}</p>
              <img src="/assets/arrow.svg" alt="arrow" className="arrow-icon" />
            </div>
          )}
          {url && <p>{url}</p>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export { EventPage };
