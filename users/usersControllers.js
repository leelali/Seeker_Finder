const db = require('../database/dbConfiguration');

module.exports = {
  get: id => {
    let query = db('users');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  },
}