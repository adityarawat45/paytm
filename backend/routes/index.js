const express = require("express");
const  userRouter = require("./user");

const router = express.Router();

router.post("/user",userRouter);

module.exports = router;