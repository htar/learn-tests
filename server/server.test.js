const request = require('supertest');
const app = require('./server').app;
var expect = require('expect');

it('should return name response', (done) => {
    request(app).get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        })
        .end(done);
})

it('should return users obj', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Taras',
                age: 29
            });
        })
        .end(done);
})