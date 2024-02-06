require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/authentication");
const app = express();
const PORT = process.env.PORT;

console.log("Port is", PORT);

if (!PORT) throw new Error("missing port");

//Mongoose connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDb Connected"));

//Register Middlewares
app.use(express.json);

app.get("/", (req, res) => res.json({ status: "success" }));
app.use("/api/v1/path", authRoute);
app.listen(PORT, () => console.log(`server started on PORT: ${PORT}`));
