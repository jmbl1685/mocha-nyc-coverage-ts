import { expect } from 'chai';
import { User } from '../src/user';

import 'mocha';

describe('Tests', () => {
    it('User Model Test', () => {
        const user = new User('Juan Manuel', 'Batty Linero');
        user.setName('Juan');
        user.setLastName('Batty');
        expect(typeof user.getName()).to.be.a('string');
        expect(typeof user.getLastName()).to.be.a('string');
        expect(user.getName()).to.equal('Juan');
        expect(user.getLastName()).to.equal('Batty');
    });
});