const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// db connexion
mongoose.connect('mongodb://localhost/quizz',{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("connected to", db.client.s.url);
});

// database collections
const usersSchema = Schema({
  // email: String,
  username: String,
  password: String
});

const quizSchema = Schema({
  name: String,
  icon: String,
  keywords: [String],
  questions: [{
    question: {type: String, required: true},
    video: String,
    txtAnswers: [String],
    imgAnswers: [String],
    solutions: [Number],
    points: Number
  }]
})

// exports
const Users = mongoose.model('Users', usersSchema);
const Quizes = mongoose.model('Quizes', quizSchema)

module.exports = {};
module.exports.users = Users;
module.exports.quizes = Quizes;
