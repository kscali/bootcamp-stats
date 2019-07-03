const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();

const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const aA = require("./routes/api/appacademy");
const bloc = require("./routes/api/bloc");
const cD = require("./routes/api/codingdojo");
const fI = require("./routes/api/flatiron");
const gA = require("./routes/api/generalassembly");
const hR = require("./routes/api/hackreactor");
const thinkful = require("./routes/api/thinkful");
const bodyParser = require("body-parser");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/appacademy", aA);
app.use("/api/bloc", bloc);
app.use("/api/codingdojo", cD);
app.use("/api/flatiron", fI);
app.use("/api/generalassembly", gA);
app.use("/api/hackreactor", hR);
app.use("/api/thinkful", thinkful);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
