var unirest = require('unirest');
const TokenService = require("../services/token");

const tokenService = new TokenService();

class CoinsService {
    constructor() {
    }

    getCoins() {
        try {
        var req = unirest("GET", "https://rapidapi.p.rapidapi.com/asset");

        req.query({
            "status": "ACTIVE"
        });

        req.headers({
            "x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
            "x-rapidapi-key": "f110ec702amsh3a7624cdbc371dep183c8bjsn3b7ecec037f4",
            "useQueryString": true
        });

        } catch (err) {
        next(err);

    }

        return Promise.resolve(req);

    }


    async getPrice() {
        try {
        var req = unirest("GET", "https://rapidapi.p.rapidapi.com/market-cap");

        const token = await tokenService.getToken();

        req.headers({
            "authorization": `Bearer ${token.body.access_token}`,
            "x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
            "x-rapidapi-key": "f110ec702amsh3a7624cdbc371dep183c8bjsn3b7ecec037f4",
            "useQueryString": true
        });

        
    } catch (err) {
        next(err);

    }
        return Promise.resolve(req);
    }



}

module.exports = CoinsService;