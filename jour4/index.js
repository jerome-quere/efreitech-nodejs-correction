const express = require('express');
const bodyParser = require('body-parser');

const mongoMiddleware = require('./middlewares/mongoMiddleware.js');
const config = require('./config/config.js');
const MessageController = require('./controllers/MessageController.js');

const app = express();
const messageController = new MessageController();

app.set('view engine', 'pug');
app.use(mongoMiddleware(config.mongo.uri));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", messageController.getAll.bind(messageController));
app.post("/", messageController.create.bind(messageController));

app.listen(config.port, (err) => {
    if (err)
	throw err;
    console.log(`Listening on port ${config.port}`);
});
