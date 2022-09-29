import React from "react";
import { useEventInfo } from "../../contexts";
import "./EventPage.css";

const EventPage = () => {
  const { eventInfo } = useEventInfo();
  const { name, start, end, url, location, description } = eventInfo;

  return (
    <div className="main-content">
      <img src="/assets/event-img.svg" alt="event-banner" />
      <h1>{name}</h1>
      <h3>Hosted by Guest</h3>
      <p>
        {start} {end}
      </p>
      <p>{location}</p>
      <p>{url}</p>
      <p>{description}</p>
    </div>
  );
};

export { EventPage };
