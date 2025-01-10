import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/App.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// allows us to render the app component regardless of the url
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
