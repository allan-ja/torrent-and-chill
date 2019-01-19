const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/User')
require('./models/Downloads')
require('./models/Movies')
require('./services/passport')

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app)
require('./routes/downloadRoutes')(app);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
