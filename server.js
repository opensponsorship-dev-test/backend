const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const path = require("path");

//Load env vars
dotenv.config({path: "./config/config.env"});

//Connect to database
connectDB();

//Route files
const athlete = require("./routes/athlete");

const app = express();

//Body Parser
app.use(express.json());


//Enable CORS
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Mount routes
app.use("/api/athlete", athlete);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server and exit process
  server.close(() => process.exit(1));
});
