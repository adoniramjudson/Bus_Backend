const express = require("express");
const connectDB = require("./config/db");
// const path = require("path");
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

//Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/travelagency", require("./routes/api/travelAgency"));
app.use("/api/travelagency", require("./routes/api/travelAgencyAuth"));
app.use("/api/buses", require("./routes/api/bus"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
