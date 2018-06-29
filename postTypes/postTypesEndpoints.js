const express = require('express');

const postTypes = require('./postTypesControllers');

const postTypesRouter = express.Router();

postTypesRouter.post('/', (req, res) => {
  const postType = req.body;
  postTypes
    .insert(postType)
    .then(postType => {
      res.status(201).json(postType);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

postTypesRouter.get('/', (req, res) => {
  postTypes
    .get()
    .then(postTypes => {
      res.status(200).json(postTypes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = postTypesRouter;