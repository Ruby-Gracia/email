require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api", require("./routes/mail"));

app.listen(PORT, console.log(`Listening on port ${PORT}.`));
