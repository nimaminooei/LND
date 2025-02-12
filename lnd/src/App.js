import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import ErorSimple from "./components/ErorSimple";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

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
