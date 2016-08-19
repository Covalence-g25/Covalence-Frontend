
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({first_name: "Kiki", last_name: "Mimosa"}),
        knex('users').insert({first_name: "Peter", last_name: "Ostiguy" }),
        knex('users').insert({first_name: "Mairin", last_name: "Bailey"})
      ]);
    });
};
