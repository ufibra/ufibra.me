const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors')

const app = express();

require('./models/wheyprotein');

app.use(cors())

const port = process.env.PORT || 5000;

const wheyRoute = require('./routes/wheyRoutes')

mongoose.connect('mongodb://localhost:27017/ufibrame')

app.use('/products', wheyRoute);

app.listen(port, () => console.log(`Running on localhost:${port}`));