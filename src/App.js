// src/App.js
import React from "react";
import AuthForm from "./components/AuthForm";

/**
 * Main application component that renders the authentication form
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <div className="app">
      <AuthForm />
    </div>
  );
}

export default App;