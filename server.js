const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
require('dotenv').config();

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//require('./server/routes/game.routes')(app);
require('./server/routes/card.routes')(app);
// require('./server/routes/cardType.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
