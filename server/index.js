const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors')

const app = express();

require('./models/wheyprotein');

app.use(cors())

const port = process.env.PORT || 5000;

const apiRoute = require('./routes/routes');
const wheyRoute = require('./routes/routeswhey')

mongoose.connect('mongodb://localhost:27017/ufibrame')

/*app.get('/api', (req, res) => {
  res.json({ express: 'Hello from expresss' });
});*/

app.use('/products', apiRoute);
app.use('/novoteste', wheyRoute);

app.listen(port, () => console.log(`Running on localhost:${port}`));