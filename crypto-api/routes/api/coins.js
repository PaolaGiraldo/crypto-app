const express = require("express");
const router = express.Router();
var cors = require('cors');
const CoinsService = require("../../services/coins");

const coinsService = new CoinsService();

var corsOptions = {
  "origin": "*",
  "methods": "GET",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};

router.get("/", cors(corsOptions), async function(req,res,next){
    try{
        const coins = await coinsService.getCoins();

        res.status(200).json({
            data: coins
        });
    }catch(err){
        next(err);

    }
})

module.exports = router;
