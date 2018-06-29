const express = require('express');

const comments = require('./commentsControllers');

const commentsRouter = express.Router();

commentsRouter.post('/', (req, res) => {
  const comment = req.body;
  comments
    .insert(comment)
    .then(comment => {
      res.status(201).json(comment);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

commentsRouter.get('/', (req, res) => {
  comments
    .get()
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

commentsRouter.put('/:id', (req, res) => {
  const updatedComment = req.body;
  const { id } = req.params;
  comments
    .update(id, updatedComment)
    .then(count => {
      if (count === 1) {
        comments
          .get(id)
          .then(comment => {
            res.status(201).json(comment)
          });
      } else {
        res.status(404).json(null);
      }
    })
    .catch(error => {
      res.status(500).json({error});
    });
});

commentsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  comments
    .remove(id)
    .then(count => {
      res.status(200).json({ removed: count });
    })
    .catch(error => {
      res.status(500).json({error});
    });
});

module.exports = commentsRouter;