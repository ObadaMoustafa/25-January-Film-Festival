import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./routes/about/About";
import Home from "./routes/home/Home";
import Team from "./routes/team/Team";
import Juries from "./routes/juries/Juries";
import Submitting from "./routes/submitting/Submitting";
import AwardsAndConditions from "./routes/awards-and-conditions/AwardsAndConditions";
import BroadcastingAndScreening from "./routes/broadcasting-and-screening/BroadcastingAndScreening";
import NonFound from "./routes/Non-found/NonFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="juries" element={<Juries />} />
        <Route path="submitting" element={<Submitting />} />
        <Route path="awards-and-conditions" element={<AwardsAndConditions />} />
        <Route
          path="broadcasting-and-screening"
          element={<BroadcastingAndScreening />}
        />
        <Route path="*" element={<NonFound />} />
      </Route>
    </Routes>
  </Router>
);
