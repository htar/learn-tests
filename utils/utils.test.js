const expect = require('expect');
const utils = require('./utils');


describe('Utils',() => {
    it('should add two number', () => {
        const res = utils.add(33, 11);
        // throw new Error('Value not correct');
        // if (res !== 44) {
        //     throw new Error(`Expected 44, but get ${res}`);
        // }
        expect(res).toBe(44).toBeA('number'); 
    });
    
    
    it('Should square a number', () => {
        let num = 2;
        const res = utils.square(num);
        // if (res !== num * num) {
        //     throw new Error(`Expected ${num * num}, but get ${res}`);
    
        // }
        expect(res).toBe(4).toBeA('number');
    });
    
    it('should expect some values',() => {
        expect(12).toNotBe(22);
        expect({name:'Taras'}).toEqual({name:'Taras'});
        expect({name:'taras'}).toNotEqual({name:'Taras'});
        expect([1,2,3,4]).toInclude(4);
        expect([1,2,3,4]).toExclude(5);
        expect({name:'Taras', age: 29,})
            .toInclude({age:29});
    });
    
    // should verify first   and last names areset
    // assert it includes firstName and lastName withproper values
    
    it('should set firstNAme and lastName',() =>{
        const user = {location:'Lviv',age:29};
        const res = utils.setName(user, 'Taras Khmelovskyi');
        expect(user).toEqual(res);
        expect(res).toInclude({
            firstName: 'Taras'
        });
    });
    
    
    it('should async add two  number', (done) => {
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(4, (square) => {
            expect(square).toBe(16).toBeA('number');
            done();
        });
    });

});
