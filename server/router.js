const express = require("express");


const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Quizes = db.quizes;

router.get("/quizes", (req, res) => {
  Quizes.find({})
    .exec((err, data) => {
      if (err)
        return res.status(500).send(err);
      else
        res.json(data);
    })
})

router.get("/search/:query", (req, res) => {
  data = req.params.query;
  Quizes.find({
    name: new RegExp(data, 'i')
  }).exec((err, data) => {
      if (err) return res.status(500).send(err);
      else res.json(data);
  });
})

// var User = require(db.users);
router.post("/newUser", (req, res) => {
  console.log(req)
  const q = new Users({
    username: req.body.name,
    password: req.body.passwd
  });    // The json object is the body of the request
  q.save()                          // Save the object.
    .then(item => res.json(item))     // send the object in response
    .catch(err => res.status(400).send("unable to save to database"));
})        

router.post("/newQuiz", (req, res) => {
  console.log(req)
  const q = new Quizes({
    // username: req.body.name,
    // password: req.body.passwd
    name: req.body.name,
    icon: req.body.icon,
    keywords: req.body.keywords,
    questions: req.body.questions
  });    // The json object is the body of the request
  q.save()                          // Save the object.
    .then(item => res.json(item))     // send the object in response
    .catch(err => res.status(400).send("unable to save to database"));
})         



router
  .get("/users", (req, res) => {
    Users
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  })
  .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  });


module.exports = router;
