const express = require('express');
const passport = require('passport');

const app = express();

require('./services/passport'); // Run passport strategies
require('./routes/auth')(app); // Run auth routes handles

const PORT = process.env.PORT || 5000;
app.listen(PORT);
