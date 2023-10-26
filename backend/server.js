const express = require("express");
const dotenv = require("dotenv");
const users = require("./data");
const connectDb = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { errorhandler, notFound } = require("./middleware/errorMiddleware");
const cors = require("cors");

dotenv.config();
connectDb();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Kya Haal Hai!");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorhandler);

const PORT = process.env.PORT_NO || 5000;
app.listen(PORT, () => {
  console.log("server started on " + PORT);
});
