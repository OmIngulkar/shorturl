// lib/urlStore.js
// IMPORTANT: In a real application, this should be a DATABASE client/connection.
// This is a temporary in-memory array for demonstration.
// Data will be lost when the server restarts.
export const globalUrlMappings = []; // Stores objects like { shortCode: "omii", originalUrl: "..." }