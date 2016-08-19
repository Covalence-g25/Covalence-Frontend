var find = require('../helper')

exports.seed = function(knex, Promise) {
  return knex('file_users').del()
   .then(function() {
     return Promise.all([
       knex("file").select(),
       knex("users").select()
     ]);
   }).then(function(data) {
     var file = data[0];
     var users = data[1];
     return Promise.all([
      knex('file_users').insert({
        file_id: find.findFile('File1', file),
        users_id: find.findUser('Bailey', users)
      }),
      knex('file_users').insert({
        file_id: find.findFile('File2', file),
        users_id: find.findUser('Mimosa', users)
      }),
      knex('file_users').insert({
        file_id: find.findFile('File3', file),
        users_id: find.findUser('Ostiguy', users)
      })
    ]);
  });
};
