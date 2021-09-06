require("dotenv").config(); //Load les variables
const express = require("express");
const bodyParser = require("body-parser");


//Import des routes
const usersRoutes = require("./routes/user");
const messageRoutes = require('./routes/message');
const path = require("path");
// init express
const app = express();


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//Sécurité de Helmet
app.disable("x-powered-by");
//Modifier l'accès et erreur CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use('/images', express.static(path.join(__dirname, "images")))
app.use('/api/auth', usersRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/:messageId/comments', messageRoutes)

module.exports = app;
