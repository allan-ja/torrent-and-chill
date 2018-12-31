const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/User')
require('./models/Downloads');
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


app.get('/', (req, res) => {
    res.send('HEEERE')
})

require('./routes/authRoutes')(app)
require('./routes/downloadRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
