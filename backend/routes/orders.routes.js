const express = require("express");
const {
    getOrders,
    addOrder
} = require ("../controller/orders.controllers")

const orderRoute = express.Router();

orderRoute.get("/", getOrders);
orderRoute.post("/add", addOrder);

module.exports = { orderRoute };
