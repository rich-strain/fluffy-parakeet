// This sets the entry point for the application
const path = require('path');

// Import express, express-session, express-handlebars, routes, and helpers
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

// Import helper functions
const helpers = require('./utils/helpers');

// Import sequelize and sequelize store
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create an instance of express
const app = express();
// Set the port to use
const PORT = process.env.PORT || 3001;

// Create an instance of express-handlebars
const hbs = exphbs.create({ helpers });

// Create a session object
const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Set the session to use the express-session object
app.use(session(sess));

// Set the express-handlebars engine and view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set the express middleware to use json, urlencoded, and static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set the express middleware to use the routes in ./controllers/index.js
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});
