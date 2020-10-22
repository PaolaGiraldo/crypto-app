const express = require("express");
const router = express.Router();
var cors = require('cors');
const UserService = require("../../services/user");
const passport = require("passport");

require('../../utils/auth/strategies/jwt');
const userService = new UserService();

var corsOptions = {
    "origin": "*",
    "methods": "GET",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

router.get("/getcoins",
    passport.authenticate("jwt", { session: false }),
    cors(corsOptions), async function (req, res, next) {
        const { body: user } = req;


        try {
            const createdUser = "await userService.finUser({ user })";

            res.status(201).json({
                data: createdUser
            });
        } catch (err) {
            next(err);

        }


    })

module.exports = router;
