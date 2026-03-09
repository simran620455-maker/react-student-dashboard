import React, { useState } from 'react';
import { studentData } from './data/students';
import ResultTable from './components/ResultTable';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Default credentials: admin / 1234
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Username or Password!");
    }
  };

  // Agar login nahi hai toh ye dikhega
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Staff Login</h2>
          <input 
            type="text" 
            placeholder="Username (admin)" 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password (1234)" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  // Login hone ke baad ye dikhega
  const filteredStudents = studentData.filter((s) =>
    s.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Student Result System</h1>
        <button onClick={() => setIsLoggedIn(false)} className="logout-btn">Logout</button>
      </div>

      <div style={{ margin: "20px 0" }}>
        <input 
          type="text" 
          placeholder="Search Roll No (e.g. 101)..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <ResultTable students={filteredStudents} />
    </div>
  );
}

export default App;