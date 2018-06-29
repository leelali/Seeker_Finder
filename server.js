const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const usersEndpoints = require('./users/usersEndpoints');
const postsEndpoints = require('./posts/postsEndpoints');
const postTypesEndpoints = require('./postTypes/postTypesEndpoints');
const targetTypesEndpoints = require('./targetTypes/targetTypesEndpoints');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use('/api/users', usersEndpoints);
server.use('/api/posts', postsEndpoints);
server.use('/api/postTypes', postTypesEndpoints);
server.use('/api/targetTypes', targetTypesEndpoints);



server.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`Server running on ${PORT}`);
});