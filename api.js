const express = require("express");
const router = express.Router();
const messageService = require("./messageService");

router.get("/asd", function(req, res, next) {
    console.log("routes")
    next();
}, messageService.getFlowdockMessages);

module.exports = router;
