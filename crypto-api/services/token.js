var unirest = require('unirest');

class TokenService {
    constructor() {
    }

    getToken() {
        try {
        var req = unirest("POST", "https://rapidapi.p.rapidapi.com/oauth/token");

        req.headers({
            "content-type": "application/json",
            "x-rapidapi-host": "bravenewcoin.p.rapidapi.com",
            "x-rapidapi-key": "f110ec702amsh3a7624cdbc371dep183c8bjsn3b7ecec037f4",
            "useQueryString": true
        });

        req.type("json");
        req.send({
            "audience": "https://api.bravenewcoin.com",
            "client_id": "oCdQoZoI96ERE9HY3sQ7JmbACfBf55RY",
            "grant_type": "client_credentials"
        });

        
    } catch (err) {
        next(err);

    }

        return Promise.resolve(req);
    }
}

module.exports = TokenService;
