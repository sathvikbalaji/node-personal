const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log('listening on port 3000')
})

//routing
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/resources/html/homepage.html')
})
app.get('/soccer', (req, res) => {
  res.sendFile(__dirname + '/resources/html/soccerpage.html')
})
app.get('/cello', (req, res) => {
  res.sendFile(__dirname + '/resources/html/cello.html')
})
app.get('/summer/2017', (req, res) => {
  res.sendFile(__dirname + '/resources/html/summer2017.html')
})
app.get('/header', (req, res) => {
  res.sendFile(__dirname + '/resources/html/header.html')
})

//scripts/pictures/stylesheets
app.get('/bootstrap/css', (req, res) => {
  res.sendFile(__dirname + '/resources/css/bootstrap.min.css')
})
app.get('/bootstrap/js', (req, res) => {
  res.sendFile(__dirname + '/resources/js/bootstrap.min.js')
})
app.get('/jquery', (req, res) => {
  res.sendFile(__dirname + '/resources/js/jquery-3.2.1.min.js')
})
app.get('/galileo', (req, res) => {
  res.sendFile(__dirname + '/resources/etc/galileo.jpg')
})
app.get('/beach', (req, res) => {
  res.sendFile(__dirname + '/resources/etc/sathvik_beach.jpg')
})
app.get('/soccer_background', (req, res) => {
  res.sendFile(__dirname + '/resources/etc/soccer.jpg')
})
app.get('/cello_background', (req, res) => {
  res.sendFile(__dirname + '/resources/etc/cello.jpg')
})
app.get('/camp_background', (req, res) => {
  res.sendFile(__dirname + '/resources/etc/camp.jpg')
})
app.get('/css/header', (req, res) => {
  res.sendFile(__dirname + '/resources/css/header.css')
})
app.get('/background', (req, res) => {
  res.sendFile(__dirname + '/resources/etc/background.png')
})
app.get('/soccer_team_photo', (req, res) => {
  res.sendFile(__dirname + '/resources/etc/team_photo.png')
})
app.get('/galileo_team_photo', (req, res) => {
  res.sendFile(__dirname + '/resources/etc/staff_photo.jpg')
})
