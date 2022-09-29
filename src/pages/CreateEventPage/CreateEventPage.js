import React, { useState } from "react";
import { useEventInfo } from "../../contexts";
import "./CreateEventPage.css";
import { useNavigate } from "react-router-dom";

const CreateEventPage = () => {
  const [eventDetails, setEventDetails] = useState({
    name: "",
    start: "",
    end: "",
    location: "",
    url: "",
    description: "",
  });
  const { eventInfo, setEventInfo } = useEventInfo();

  const submitHandler = (e) => {
    e.preventDefault();
    setEventInfo(eventDetails);
    navigate("/event");
  };

  console.log(eventInfo);

  const navigate = useNavigate();

  return (
    <div className="main-content">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-elements">
          <label htmlFor="event-name">My event is called</label>
          <input
            type="text"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, name: e.target.value })
            }
            required
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-start-time">It starts at</label>
          <input
            type="datetime-local"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, start: e.target.value })
            }
            required
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-end-time">
            It ends at <span>(optional)</span>
          </label>
          <input
            type="datetime-local"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, end: e.target.value })
            }
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-location">
            It's happening at <span>Optional</span>
          </label>
          <input
            type="text"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, location: e.target.value })
            }
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-link">
            Add a URL link <span>Optional</span>
          </label>
          <input
            type="url"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, url: e.target.value })
            }
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-details">
            Description <span>Optional</span>
          </label>
          <input
            type="text"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, description: e.target.value })
            }
          />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export { CreateEventPage };
