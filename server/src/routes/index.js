const path = require('path');

const indexHTML = path.resolve(__dirname, '../public/index.html');

const indexRoute = (req, res) => {
  res.sendFile(indexHTML);
  res.end();
};

const testRoute = (req, res) => {
  console.log(process.pid); // eslint-disable-line
  res.send('Welcome to express');
  res.end();
};

const fallbackRoute = (req, res) => {
  res.sendFile(indexHTML);
  res.end();
};
module.exports = {
  indexRoute,
  testRoute,
  fallbackRoute,
};
