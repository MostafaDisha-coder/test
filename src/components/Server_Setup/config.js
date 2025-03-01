export const API_URL = 
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000"  // Local development URL (port 3000)
    : window.location.hostname.includes("github.dev")
    ? "https://symmetrical-capybara-97r69wq946wcp45r-3000.app.github.dev"  // GitHub Codespaces URL
    : "https://your-production-server.com";  // Production URL (replace with actual URL when deployed)

console.log("API_URL :", API_URL); 
