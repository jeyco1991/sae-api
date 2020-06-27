const express = require("express");
const router = express.Router();

const userService = require("../business/user.service");

router.post("/users", async (req, res) => {
  try {
    const user = await userService.create(req.body.data || {});
    res.status(201).json({ message: "user created", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/users", (req, res) => {
  res.send("get users");
});

router.get("/users/:id", (req, res) => {
  res.send("get user by id");
});

router.patch("/users/:id", (req, res) => {
  res.send("update user by id");
});

router.delete("/users/:id", (req, res) => {
  res.send("delete user by id");
});

module.exports = router;
