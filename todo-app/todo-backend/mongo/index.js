const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { MONGO_URL } = require('../util/config')

console.log("MONGO_URL ", MONGO_URL);

if (MONGO_URL && !mongoose.connection.readyState) {
  console.log("Connecting to database: ", MONGO_URL);
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connect to database success");
  })
    .catch(err => console.log(err))
}


module.exports = {
  Todo
}
