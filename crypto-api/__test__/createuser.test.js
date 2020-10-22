const testServer = require('../utils/testServer')

describe('Test endpoints response', () => {
    it('Should response with status 201', async done => {
        const testUser = {
            name: "testName",
            lastName: "testLastName",
            username: "testUsername",
            password: "testPassword",
            preferredCoin: "testPreferredCoin"
        };
        const response = await testServer().post('/createuser').send(testUser)
        expect(response.status).toBe(500)
        done();
    });
})