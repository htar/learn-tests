const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');


describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db);
    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Taras',29);
        expect(spy).toHaveBeenCalledWith('Taras', 29);
    });
    it('should call saveUser with user object', () => {
        let email = 'gmail@gmail.com',
            password = '1234';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});