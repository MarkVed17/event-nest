import React, { useState, createContext, useContext } from "react";

const EventInfoContext = createContext();

const EventInfoProvider = ({ children }) => {
  const [eventInfo, setEventInfo] = useState({});

  return (
    <EventInfoContext.Provider value={{ eventInfo, setEventInfo }}>
      {children}
    </EventInfoContext.Provider>
  );
};

const useEventInfo = () => {
  const context = useContext(EventInfoContext);

  if (context === undefined) {
    throw new Error("useEventInfo must be used within a EventInfoProvider");
  }

  return context;
};

export { useEventInfo, EventInfoProvider };
