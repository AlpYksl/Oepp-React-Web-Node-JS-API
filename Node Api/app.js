const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const gameRoute = require('./routes/games');
const contentRoute = require('./routes/contents');
const quest = require('./question')
const port = 3001;
var MySQLStore = require('express-mysql-session')(session);

app.use(cors({
    origin: process.env.APP_URL,
    credentials: true
}));

//app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var options = {
	host: process.env.MYSQL_HOST,
	port: 3306,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
};
var sessionStore = new MySQLStore(options);

app.use(session({
	key: 'user_sid',
	secret: 'somerandonstuffs',
	store: sessionStore,
    resave: true,
    rolling: true,
	saveUninitialized: false
}));

app.use("/user", userRoutes);
app.use("/category",categoryRoutes);
app.use("/games",gameRoute);
app.use("/contents",contentRoute);
app.use("/questions",quest);

app.set("port", port);


const server = http.createServer(app);
server.listen(port);
server.on("listening", onListening);

function onListening(){
    const address = server.address();
    console.log("Application started on port " + address.port);
}