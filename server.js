const express = require("express");
const morgan = require("morgan");

// Express app
const app = express();

// constants
const PORT = 8080;

// application level middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logger
app.use(morgan("dev"));

// route initialize
app.use('/api', require('./routes/api'));

// server startup logic
app.listen(PORT, () => {
  console.log(`Server started | Link: http://localhost:${PORT}/`);
});
