const express = require('express');
const router  = express.Router();

app.get('/reg', (req, res) => {
    res.send("Registration page!")
});

app.get('/auth', (req, res) => {
    res.send("Login page!")
});

app.get('/dashboard', (req, res) => {
    res.send("Dashboard")
});