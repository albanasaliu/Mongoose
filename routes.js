const express = require("express");
const CustomerModel = require("./models");
const app = express();

app.post("/add_customer", async (req, res) => {
    const customer = new CustomerModel(req.body);

    try {
        await customer.save();
        res.send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/customers", async (req, res) => {
    const customer = await CustomerModel.find({});

    try {
        res.send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = app;
