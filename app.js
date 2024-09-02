const express = require('express');
const mongoose = require('mongoose');
const offreshema = require('./routes/offres');
const routeragence = require('./routes/agence');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

// Connexion à MongoDB
mongoose.connect('mongodb+srv://kolony:1708roosevelt@cluster0.6htgklq.mongodb.net/cluster0',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(err => console.error('Connexion à MongoDB échouée !', err));

app.use(bodyparser.json());
app.use(cors());

app.use('/offres', offreshema);
app.use('/auth', routeragence);

module.exports = app;