const db = require('../database/dbConfiguration');

module.exports = {
  get: id => {
    let query = db('comments');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  },

  insert: comment => {
    return db('comments')
      .insert(comment)
      .then(ids => ({ id: ids[0] }));
  },

  update: (id, comment) => {
    return db('comments')
      .where('id', id)
      .update(comment);
  },

  remove: id => {
    return db('comments')
      .where('id', id)
      .del();
  },
}