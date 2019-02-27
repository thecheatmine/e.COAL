const express = require("express");


const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Quizes = db.quizes;

router.get("/quizes", (req, res) => {
  protect(req, res, () => {
  Quizes.find({})
    .exec((err, data) => {
      if (err)
        return res.status(500).send(err);
      else
        res.json(data);
    });
  })
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
