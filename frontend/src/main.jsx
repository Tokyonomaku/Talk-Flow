import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// Immediate render test
console.log("main.jsx loaded at", new Date().toISOString());

// Verify root element exists
const rootElement = document.getElementById("root");
console.log("Root element found:", !!rootElement);

if (!rootElement) {
  console.error("Root element not found!");
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif; background: #0f172a; color: white; min-height: 100vh;"><h1>Error: Root element not found</h1><p>Please check that index.html has a div with id="root"</p></div>';
} else {
  try {
    console.log("Creating React root...");
    const root = ReactDOM.createRoot(rootElement);
    console.log("Root created, rendering App...");
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("React app mounted successfully at", new Date().toISOString());
  } catch (error) {
    console.error("Error mounting React app:", error);
    console.error("Error stack:", error.stack);
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif; background: #0f172a; color: white; min-height: 100vh;">
        <h1>Error Loading App</h1>
        <p style="color: #ef4444;">${error.message}</p>
        <pre style="background: #1f2937; padding: 10px; border-radius: 4px; overflow: auto; max-height: 400px;">${error.stack || 'No stack trace'}</pre>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 4px; cursor: pointer;">Reload Page</button>
      </div>
    `;
  }
}
