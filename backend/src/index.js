require('./modules/User');
const config = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
});
mongoose.connection.on('connected', () => {
    console.log('mongoose connected');
});
mongoose.connection.on('error', (err) => {
   console.log('mongoose error ', err) 
});
app.get('/', (req, res) => {
    res.send('Test');
});

app.listen(3000, () => {
    console.log('Listening');
});