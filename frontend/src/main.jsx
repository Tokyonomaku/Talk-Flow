import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// Verify root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif;"><h1>Error: Root element not found</h1><p>Please check that index.html has a div with id="root"</p></div>';
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React app mounted successfully");
  } catch (error) {
    console.error("Error mounting React app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif; color: red;">
        <h1>Error Loading App</h1>
        <p>${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `;
  }
}
