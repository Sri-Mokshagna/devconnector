const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routers/api/users');
const profile = require('./routers/api/profile');
const posts = require('./routers/api/posts');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log("Mongo DB Connection established"))
    .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port : ${port}`);
});
const express = require("express");
const cors = require("cors");

app.use(
  cors({
    origin: "https://animated-truffle-9c9f13.netlify.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
