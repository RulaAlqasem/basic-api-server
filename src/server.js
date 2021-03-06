'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const app = express();
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());


app.use('/clothes', clothesRouter);
app.use('/food', clothesRouter);


app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};