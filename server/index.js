const express = require('express');
const axios = require('axios');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const fetchData = (url, res) => {
  axios.get(url)
    .then(response => res.send(response.data))
    .catch((err) => { throw err; });
};

app.use(bodyParser.json());
app.use('/:id', express.static(__dirname + '/../public'));

app.get('/:id/bookingBundle.js', (req, res) => {
  const url = `http://env-dev.brgmruhzxf.us-west-1.elasticbeanstalk.com/${req.params.id}/bookingBundle.js`;
  fetchData(url, res);
});

app.get('/:id/photosBundle.js', (req, res) => {
  const url = `http://photos.taxwawufkp.us-west-1.elasticbeanstalk.com/${req.params.id}/photosBundle.js`;
  fetchData(url, res);
});

app.get('/:id/reviewbundle.js', (req, res) => {
  const url = 'http://localhost:3007/reviewbundle.js';
  fetchData(url, res);
});


app.get('/info/:id', (req, res) => {
  const url = `http://env-dev.brgmruhzxf.us-west-1.elasticbeanstalk.com/info/${req.params.id}`;
  fetchData(url, res);
});

app.get('/dates/:id', (req, res) => {
  const url = `http://env-dev.brgmruhzxf.us-west-1.elasticbeanstalk.com/dates/${req.params.id}`;
  fetchData(url, res);
});

app.get('/photos/:id', (req, res) => {
  const url = `http://photos.taxwawufkp.us-west-1.elasticbeanstalk.com/photos/${req.params.id}`;
  fetchData(url, res);
});

app.get('/house/:houseId/', (req, res) => {
  const url = `http://localhost:3007/house/${req.params.houseId}`;
  fetchData(url, res);
});

app.get('/house/:houseId/reviews', (req, res) => {
  const url = `http://localhost:3007/house/${req.params.houseId}/reviews?page=${req.query.page}`;
  fetchData(url, res);
});

app.get('/users', (req, res) => {
  const url = 'http://localhost:3007/users';
  fetchData(url, res);
});
app.get('/user/:userId', (req, res) => {
  const url = `http://localhost:3007/user/${req.params.userId}`;
  fetchData(url, res);
});

app.post('/dates/:id', (req, res) => {
  axios.post(`http://env-dev.brgmruhzxf.us-west-1.elasticbeanstalk.com/dates/${req.params.id}`, req.body)
    .then(response => res.send('success'))
    .catch((err) => { throw err; });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
