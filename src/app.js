const path = require('path');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/users.route');

const app = express();

app.use(cors({
    origin: process.env.FRONT_ORIGIN,
}));

app.use(express.json());

app.use('/api', routes);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
