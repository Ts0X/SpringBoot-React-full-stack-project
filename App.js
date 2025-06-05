import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./components/Books";
import Authors from "./components/Authors";

import "./App.css"

function App() {
  return (
    <Router>
      <header>
        <h1>Library Managment System</h1>
      </header>
      <nav>
        <Link to="/books">Books</Link> | <Link to="/authors">Authors</Link>
      </nav>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </Router>
  );
}

export default App;
