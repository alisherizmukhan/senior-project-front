import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { testSupabaseConnection } from "./supabaseClient";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    testSupabaseConnection();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
