exports.seed = function(knex, Promise) {
  return knex('file').del()
    .then(function () {
      return Promise.all([
        knex('file').insert({name: "File1", content: "insert some code here", timestamp: "18-Aug-16 1:33PM"}),
        knex('file').insert({name: "File2", content: "insert some code here", timestamp: "16-Aug-16 4:01AM"}),
        knex('file').insert({name: "File3", content: "insert some code here", timestamp: "01-Aug-16 8:47PM"})
      ]);
    });
};
