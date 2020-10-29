const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  eventName: String,
  eventDesc: String,
  startDate: String,
  endDate: String,
  organizer: String,
  tickets: [
    {
      ticketId: {
        type: String,
      },
      ticketNo: {
        type: String,
      },
      price: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("EventTicket", formSchema);
