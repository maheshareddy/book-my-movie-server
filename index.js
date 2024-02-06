require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

console.log("Port is", PORT);

if (!PORT) throw new Error("missing port");

app.get("/", (req, res) => res.json({ status: "success" }));
app.listen(PORT, () => console.log(`server started on PORT: ${PORT}`));
