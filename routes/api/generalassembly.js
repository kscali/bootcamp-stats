const express = require("express");
const router = express.Router();

const passport = require("passport");

const GA = require("../../models/GeneralAssembly");

router.get("/", (req, res) => {
  GA.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ notusersfound: "No users found" }));
});

router.get("/user/:user_id", (req, res) => {
  GA.find({ user: req.params.user_id })
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ notuserfound: "No user found" }));
});

router.get("/:id", (req, res) => {
  GA.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ notfound: "No user found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newGA = new GA({
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
      background: req.body.background,
      salary: req.body.salary,
      yrsCoding: req.body.yrsCoding
    });

    newGA.save().then(user => res.json(user));
  }
);

module.exports = router;
