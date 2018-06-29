const db = require('../database/dbConfiguration');

module.exports = {
  get: id => {
    let query = db('postTypes');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  },

  insert: post => {
    return db('postTypes')
      .insert(post)
      .then(ids => ({ id: ids[0] }));
  },

  update: (id, post) => {
    return db('postTypes')
      .where('id', id)
      .update(post);
  },

  remove: id => {
    return db('postTypes')
      .where('id', id)
      .del();
  },
}