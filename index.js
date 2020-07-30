// index.js


// Required External Modules

const express = require("express");
const path = require("path");
const flash = require('connect-flash');
const session = require('express-session');


// App Variables

const app = express();

 
// PugJS Configuration

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "assets")));


// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))


// Connect Flash

app.use(flash());

// Global Vars

app.use((req, res, next) =>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');

  next();
});


// Routes Definitions

app.use('/', require('./routes/index'));


// Server Activation

const port = process.env.PORT || "8000";

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });