const testServer = require('../utils/testServer')

describe('Test endpoints response', () => {
    it('Should response with status 200', async done => {
        const response = await testServer().get('/coins')
        expect(response.status).toBe(200)
        done();
    });

    it('Should response with status type json', async done => {
        const response = await testServer().get('/coins')
        expect(response.headers["content-type"]).toMatch(/json/);
        done();
    });
})