import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import InstagramLinks from "./pages/InstagramLinks";
import ErorSimple from "./components/ErorSimple";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flex" element={<Services />} />
        <Route path="/instagram-links" element={<InstagramLinks />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <ErorSimple />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
