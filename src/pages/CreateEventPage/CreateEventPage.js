import React, { useState } from "react";
import moment from "moment";
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
  const { setEventInfo } = useEventInfo();

  const submitHandler = (e) => {
    e.preventDefault();
    setEventInfo(eventDetails);
    navigate("/event");
  };

  const navigate = useNavigate();

  return (
    <div className="main-content">
      <h1>Create your event</h1>
      <form onSubmit={(e) => submitHandler(e)} className="form-container">
        <div className="form-elements">
          <label htmlFor="event-name">
            <span role="img" aria-label="celebrate">
              🎉
            </span>
            My event is called
          </label>
          <input
            type="text"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, name: e.target.value })
            }
            className="event-input-box"
            required
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-start-time">
            <span role="img" aria-label="calendar">
              🗓
            </span>
            It starts at
          </label>
          <input
            type="datetime-local"
            onChange={(e) =>
              setEventDetails({
                ...eventDetails,
                start: moment(e.target.value),
              })
            }
            className="event-input-box"
            required
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-end-time">
            <span role="img" aria-label="flag">
              🏁
            </span>
            It ends at <span className="optional-label">(optional)</span>
          </label>
          <input
            type="datetime-local"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, end: moment(e.target.value) })
            }
            className="event-input-box"
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-location">
            <span role="img" aria-label="pin">
              📍
            </span>
            It's happening at <span className="optional-label">(optional)</span>
          </label>
          <input
            type="text"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, location: e.target.value })
            }
            className="event-input-box"
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-link">
            <span role="img" aria-label="url">
              🔗
            </span>{" "}
            Add a URL link <span className="optional-label">(optional)</span>
          </label>
          <input
            type="url"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, url: e.target.value })
            }
            className="event-input-box"
          />
        </div>

        <div className="form-elements">
          <label htmlFor="event-details">
            <span role="img" aria-label="pencil">
              ✏️
            </span>{" "}
            Description <span className="optional-label">(optional)</span>
          </label>
          <input
            type="text"
            onChange={(e) =>
              setEventDetails({ ...eventDetails, description: e.target.value })
            }
            className="event-input-box"
          />
        </div>

        <button type="submit" className="next-btn">
          Next
        </button>
      </form>
    </div>
  );
};

export { CreateEventPage };
