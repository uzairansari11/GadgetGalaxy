const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    fullName: String,
    address: String,
    phone: Number,
    cardNumber:Number,
    paymentMethod:String,
    orderAmount: Number,
    numOfItems: Number,
    userID : String
  },
  {
    versionKey: false,
  }
);

const OrderModel = mongoose.model("order", orderSchema);

module.exports = {
    OrderModel
};