const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const cors = require('cors');
const app = express();

//app.use(morgan('combined'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(cors());
//app.use(bodyParser.json({ type: '*/*' }));

require('./routes/auth')(app);
require('./routes/categories')(app);
require('./routes/boards')(app);
require('./routes/tests')(app);
require('./routes/boards_and_categories')(app);

const port = process.env.PORT || 8081;
const server = http.createServer(app);
server.listen(port);
console.log("listening");
