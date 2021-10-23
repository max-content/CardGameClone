const express = require("express");
const cors = require("cors");
require('./serverTut/config/mongoose.config');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/test", (req,res) => {
    return res.json({message: "hello"})
})

require('./serverTut/routes/articles')(app);

app.listen(port, () => console.log(`The app is running on Port: ${port}`));