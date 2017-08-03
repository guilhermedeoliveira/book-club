const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // Run passport strategies
require('./routes/auth')(app); // Run auth routes handles

// Connect mongoose to MongoDB instance
mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
