import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, CreateEventPage, EventPage } from "../../pages";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateEventPage />} />
      <Route path="/event" element={<EventPage />} />
    </Routes>
  );
};

export { Main };
