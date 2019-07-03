const express = require("express");
const router = express.Router();

const passport = require("passport");

const CD = require("../../models/CodingDojo");

router.get("/", (req, res) => {
  CD.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ notusersfound: "No users found" }));
});

router.get("/user/:user_id", (req, res) => {
  CD.find({ user: req.params.user_id })
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ notuserfound: "No user found" }));
});

router.get("/:id", (req, res) => {
  CD.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ notfound: "No user found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newCD = new CD({
      user: req.user.id,
      graduationYear: req.body.graduationYear,
      monthsToFindJob: req.body.monthsToFindJob,
      jobApps: req.body.jobApps,
      phoneScreens: req.body.phoneScreens,
      onSites: req.body.onSites,
      referral: req.body.referral,
      coldApply: req.body.coldApply,
      haveDegree: req.body.haveDegree,
      typeDegree: req.body.typeDegree,
      positionHired: req.body.positionHired,
      salary: req.body.salary,
      yrsCoding: req.body.yrsCoding
    });

    newCD.save().then(user => res.json(user));
  }
);

module.exports = router;
