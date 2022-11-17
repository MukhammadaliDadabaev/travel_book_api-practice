const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

// CONNECT TO DATABASE
connectDB();

const app = express();
// body-parser Bu json-qaytaradi middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/travel", require("./routes/travelRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
