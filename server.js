const express = require("express");
const app = express();

app.use(express.json());

app.post("/send", (req, res) => {
    console.log("Received data:", req.body);
    res.json({ status: "ok" });
});

app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
