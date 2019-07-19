const express = require("express");
const router = express.Router();

const passport = require("passport");

const AA = require("../../models/AppAcademy");

router.get("/", (req, res) => {
  AA.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ notusersfound: "No users found" }));
});

router.get("/user/:user_id", (req, res) => {
  AA.find({ user: req.params.user_id })
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ notuserfound: "No user found" }));
});

router.get("/:id", (req, res) => {
  AA.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ notfound: "No user found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newAA = new AA({
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

    newAA.save().then(user => res.json(user));
  }
);

module.exports = router;
