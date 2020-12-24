const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');

const app = express();

const port = 3000;

mongoose.connect(config.db);

app.listen(port, () => {
    console.log("Server was running on the port: " + port)
});

app.get('/', (req, res) => {
    res.send("Home page!")
});