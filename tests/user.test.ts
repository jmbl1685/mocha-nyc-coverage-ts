import { expect } from 'chai';
import User from '../src/User';

const user = new User('Juan Manuel', 'Batty Linero');

describe('Tests', () => {

    it('User Model Test', () => {

        user.setName('Juan');
        user.setLastName('Batty');

        expect(typeof user.getName()).to.be.a('string');
        expect(typeof user.getLastName()).to.be.a('string');
        expect(user.getName()).to.equal('Juan');
        expect(user.getLastName()).to.equal('Batty');

    });


});