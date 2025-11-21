import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// Immediate render test
console.log("main.jsx loaded");

// Verify root element exists
const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (!rootElement) {
  console.error("Root element not found!");
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif; background: #0f172a; color: white; min-height: 100vh;"><h1>Error: Root element not found</h1><p>Please check that index.html has a div with id="root"</p></div>';
} else {
  try {
    console.log("Creating React root...");
    const root = ReactDOM.createRoot(rootElement);
    console.log("Rendering App...");
    root.render(
      React.createElement(React.StrictMode, null,
        React.createElement(App, null)
      )
    );
    console.log("React app mounted successfully");
  } catch (error) {
    console.error("Error mounting React app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif; background: #0f172a; color: white; min-height: 100vh;">
        <h1>Error Loading App</h1>
        <p style="color: #ef4444;">${error.message}</p>
        <pre style="background: #1f2937; padding: 10px; border-radius: 4px; overflow: auto;">${error.stack}</pre>
      </div>
    `;
  }
}
