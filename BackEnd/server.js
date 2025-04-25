const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const videoRoutes = require("./routes/videos");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/videos", videoRoutes);

mongoose.connect("mongodb://localhost:27017/youtubeclone")
    .then(() => {
        console.log("MongoDB connected");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch(err => console.error(err));
