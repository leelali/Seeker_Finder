const express = require('express');

const targetTypes = require('./targetTypesControllers');

const targetTypesRouter = express.Router();

targetTypesRouter.post('/', (req, res) => {
  const targetType = req.body;
  targetTypes
    .insert(targetType)
    .then(targetType => {
      res.status(201).json(targetType);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

targetTypesRouter.get('/', (req, res) => {
  targetTypes
    .get()
    .then(targetTypes => {
      res.status(200).json(targetTypes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = targetTypesRouter;