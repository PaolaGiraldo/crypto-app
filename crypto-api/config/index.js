require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  authAdminUsername: process.env.AUTH_ADMIN_USERNAME,
  authAdminPassword: process.env.AUTH_ADMIN_PASSWORD,
  authJwtSecret: process.env.AUTH_JWT_SECRET
};

module.exports = { config };
