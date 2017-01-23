const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('saving records', function () {
    it('saves a record into the db', function () {
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function () {
            assert(char.isNew === false);
        });


    })
});
