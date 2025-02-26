const express = require("express");
const cors = require("cors");
const path = require("path");
const ads = require("./data.json");

const app = express();
app.use(cors());

// Serve static files (like images)
app.use("/static", express.static(path.join(__dirname, "..", "static")));

app.get("/ads", (req, res) => {
  res.json({ advertisements: ads });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Advertise service running on port ${PORT}`);
});
