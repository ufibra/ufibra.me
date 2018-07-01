const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const apiRoute = require('./routes/routes');

/*app.get('/api', (req, res) => {
  res.json({ express: 'Hello from expresss' });
});*/

app.use('/products', apiRoute);

app.listen(port, () => console.log(`Running on localhost:${port}`));