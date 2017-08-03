const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create db Schema
const userSchema = new Schema({
	facebookId: String,
	googleId: String
});

mongoose.model('Users', userSchema);
