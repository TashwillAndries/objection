const dbsetup = require("./db/db-setup");
const express = require("express");
const User = require("./models/user");
dbsetup();

const app = express();
app.use(express.json());

app.get("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id).withGraphFetched("channel");
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.listen(8080, () => console.log("server running on port 8080"));
