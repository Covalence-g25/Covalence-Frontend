exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE file_users, file, users RESTART IDENTITY CASCADE')
};
