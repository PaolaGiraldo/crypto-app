const express = require("express");
const router = express.Router();
var cors = require('cors');
const UserService = require("../../services/user");

const userService = new UserService();

var corsOptions = {
    "origin": "*",
    "methods": "POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

router.post("/", cors(corsOptions), async function (req, res, next) {
    const { body: user } = req;


    try {
        const createdUser = await userService.createUser({ user });

        res.status(201).json({
            data: createdUser,
            message: "Usuario creado exitosamente"
        });
    } catch (err) {
        next(err);

    }


})

module.exports = router;
