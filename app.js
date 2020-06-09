require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

const connectDB = require("./database/connect");
connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, "Frontend/dist")));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend/dist/index.html"));
});
app.listen(port, () => console.log(`Example app listening on port port!`));
