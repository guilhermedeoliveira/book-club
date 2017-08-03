const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook');

const keys = require('../config/keys');

// Google OAuth Strategy
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			// Callback returning from Google OAuth flow
		}
	)
);

// Facebook OAuth Strategy
passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback',
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			// Callback returning from Facebook OAuth flow
		}
	)
);
