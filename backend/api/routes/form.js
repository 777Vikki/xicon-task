const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const formModel = require("../models/form");

router.post("/", (req, res, next) => {
  console.log(req.body);
  const formvalue = new formModel({
    _id: mongoose.Types.ObjectId(),
    eventName: req.body.eventName,
    eventDesc: req.body.eventDesc,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    organizer: req.body.organizer,
    tickets: req.body.tickets,
  });
  formvalue
    .save()
    .then((result) => {
      if (result) {
        formModel.find().then((eventManagementRes) => {
          res.status(201).json(eventManagementRes);
        });
      }
    })
    .catch();
});

module.exports = router;
