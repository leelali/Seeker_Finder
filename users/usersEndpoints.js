const express = require('express');

const users = require('./usersControllers');

const usersRouter = express.Router();

usersRouter.post('/signup', (req, res) => {
  const user = req.body;
  users
    .insert(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

usersRouter.get('/', (req, res) => {
  users
    .get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = usersRouter;