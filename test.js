// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route that handles GET requests to the root URL ("/")
app.get('/', (req, res) => {
  // Send a response back to the client
  res.send('Hello, World!');
});

// Start the Express server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
