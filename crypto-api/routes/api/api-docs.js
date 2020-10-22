"use strict";

const express = require("express");
const router = express.Router();
var cors = require('cors');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const port = process.env.PORT
var corsOptions = {
  "origin": "*",
  "methods": "GET",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};

const swaggerDefinition = {
  basePath: "/",

  title: "Currency exchange API",
  description: "This is a sample server for a currency exchange app.",
  contact: {
    name: "Paola Giraldo",
    email: "paolagiraldo822@gmail.com"
  },
  license: {
    name: "MIT",
    url: "https://opensource.org/licenses/mit-license.html"
  },
  servers: {
    url: `http://localhost:${port}`,
  },
  version: "1.0",

  paths: {
    "/coins": {
      "get": {
        "description": "Returns all the coins",
        "responses": {
          "200": {
            "description": "List the UUID and details for all assets",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "/coins"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/price": {
      "get": {
        "description": "This endpoint will return the latest details for an asset refreshed every 5 minutes with global USD spot price, 24 hour volume and supply.",
        "responses": {
          "200": {
            "description": "List the UUID and details for all assets",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "/price"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  swagger: "2.0"
  

}

const swaggerOptions = {
  swaggerDefinition,
  
  apis: ['./routes/api/'],
};


router.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDefinition, swaggerOptions));

router.get("/", cors(corsOptions), function (req, res, next) {
  const swaggerSpec = swaggerJSDoc(swaggerOptions);

  res.status(200).json(
    { data: swaggerSpec }
  )//send(swaggerSpec);

})


module.exports = router;