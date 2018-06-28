
exports.up = function(knex) {
  return createUsersTable(knex)
    .then(createPostsTable)
    .then(createPostTypesTable)
    .then(createTargetTypesTable)
    .then(createCommentsTable)
    .catch(error => {
      console.log(error);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('comments')
    .then(() => {
      console.log("Dropping TargetTypes Table");
      return knex.schema.dropTableIfExists('targetTypes');
    })
    .then(() => {
      console.log("Dropping PostTypes Table");
      return knex.schema.dropTableIfExists('postTypes');
    })
    .then(() => {
      console.log("Dropping Posts Table");
      return knex.schema.dropTableIfExists('posts');
    })
    .then(() => {
      console.log("Dropping Users Table");
      return knex.schema.dropTableIfExists('users');
    })
    .catch(error => console.log(error));
};

createUsersTable = knex => {
  console.log('creating users table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('users', table => {
        table.increments('id').primary();
        table.string('username', 128).notNullable().unique();
        table.string('email', 128).notNullable().unique();
        table.string('password', 128).notNullable();
        table.timestamp('createAt').defaultTo(knex.fn.now());

        console.log('users table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};

createPostsTable = knex => {
  console.log('creating posts table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('posts', table => {
        table.increments('id').primary();
        table.integer('postType').notNullable();
        table.integer('targetType');
        table.text('description', 'longtext');
        table.string('zipcode', 128);
        table
          .integer('userID')
          .references('id')
          .inTable('users')
          .notNullable()
          .onDelete('CASCADE')
          .index();
        table.timestamp('createdAt').defaultTo(knex.fn.now());

        console.log('posts table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};

createPostTypesTable = knex => {
  console.log('creating postTypes table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('postTypes', table => {
        table.increments('id').primary();
        table.string('type', 128).notNullable().unique();
        table.timestamp('createAt').defaultTo(knex.fn.now());

        console.log('postTypes table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};

createTargetTypesTable = knex => {
  console.log('creating targetTypes table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('targetTypes', table => {
        table.increments('id').primary();
        table.string('type', 128).notNullable().unique();
        table.timestamp('createAt').defaultTo(knex.fn.now());

        console.log('targetTypes table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};

createCommentsTable = knex => {
  console.log('creating comments table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('comments', table => {
        table.increments('id').primary();
        table.text('content', 'longtext');
        table
          .integer('postID')
          .references('id')
          .inTable('posts')
          .notNullable()
          .onDelete('CASCADE')
          .index();
        table.timestamp('createAt').defaultTo(knex.fn.now());

        console.log('postTypes table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};