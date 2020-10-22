const { User } = require('../models');
const bcrypt = require("bcrypt");

class UserService {
    constructor() {
    }

    async createUser({ user }) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        await User.sync();
        const createdUser = await User.create({
            name: user.name,
            lastName: user.lastName,
            username: user.username,
            password: hashedPassword,
            preferredCoin: user.preferredCoin
        });
        return Promise.resolve(createdUser);

    }


}

module.exports = UserService;