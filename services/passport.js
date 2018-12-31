const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email'
  }, 
    async (email, password, done) => {
        const user = await User.findOne({ email: email });
        if (!user) { return done(null, false); }
        const isMatch = await user.verifyPassword(password);
        if (isMatch) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }
));
