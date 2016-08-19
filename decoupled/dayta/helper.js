module.exports = {
  findFile: function(name, list) {
    for (var i = 0; i < list.length; i++) {
      var file = list[i]
      if (name === file.name) {
        return file.id
      }
    }
  },
  findUser: function(name, list) {
    for (var i = 0; i < list.length; i++) {
      var user = list[i]
      if (name === user.last_name) {
        return user.id
      }
    }
  }
}
