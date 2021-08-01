require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: './uploads/'});

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//require('./server/routes/game.routes')(app);
app.use('/uploads', express.static('uploads'));


require('./server/routes/card.routes')(app);
app.listen(port, () => console.log(`Listening on port ${port}`));
