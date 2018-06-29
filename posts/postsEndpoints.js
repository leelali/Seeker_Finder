const express = require('express');

const posts = require('./postsControllers');

const postsRouter = express.Router();

postsRouter.post('/', (req, res) => {
  const post = req.body;
  posts
    .insert(post)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

postsRouter.get('/', (req, res) => {
  posts
    .get()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

postsRouter.put('/:id', (req, res) => {
  const updatedPost = req.body;
  const { id } = req.params;
  posts
    .update(id, updatedPost)
    .then(count => {
      if (count === 1) {
        posts
          .get(id)
          .then(post => {
            res.status(201).json(post)
          });
      } else {
        res.status(404).json(null);
      }
    })
    .catch(error => {
      res.status(500).json({error});
    });
});

postsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  posts
    .remove(id)
    .then(count => {
      res.status(200).json({ removed: count });
    })
    .catch(error => {
      res.status(500).json({error});
    });
});

module.exports = postsRouter;