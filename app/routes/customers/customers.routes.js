var express = require('express');
var router = express.Router();
const customerController = require("../../controllers/customer.controller.js");

// Create a new Customer
router.post("/", customerController.create);

// Retrieve all Customers
router.get("/", customerController.findAll);

// Retrieve a single Customer with customerId
router.get("/:customerId", customerController.findOne);

// Update a Customer with customerId
router.put("/:customerId", customerController.update);

// Delete a Customer with customerId
router.delete("/:customerId", customerController.delete);

// Create a new Customer
router.delete("/", customerController.deleteAll);

module.exports = router;
