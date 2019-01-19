const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
    
    app.post('/api/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        }
    );

    app.post('/api/signup', async (req, res) => {
        const user = await User.findOne({ email: req.body.email});
        if (user) { res.send("This user already exists"); }
        else {
            const newUser = await new User(req.body).save();
            res.send(newUser)
        }
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};