const db = require('../database/dbConfiguration');

module.exports = {
  get: id => {
    let query = db('targetTypes');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  },

  insert: targetType => {
    return db('targetTypes')
      .insert(targetType)
      .then(ids => ({ id: ids[0] }));
  },

  update: (id, targetType) => {
    return db('targetTypes')
      .where('id', id)
      .update(targetType);
  },

  remove: id => {
    return db('targetTypes')
      .where('id', id)
      .del();
  },
}