const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const boom = require("boom");
const bcrypt = require("bcrypt");
const { User } = require('../../../models');

passport.use(
    new BasicStrategy(async function (username, password, cb) {
        try {
            const [user] = await User.findAll({
                where: {
                    username: username
                }
            });

            if (!user) {
                return cb(boom.unauthorized(), false);
            }
            if (!(await bcrypt.compare(password, user.password))) {
                return cb(boom.unauthorized(), false);
            }

            return cb(null, user);

        } catch (error) {
            return cb(error);

        }
    })
);
