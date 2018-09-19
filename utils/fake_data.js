const faker   = require('faker');

let fake = function (){ 
    return {
        email: faker.fake("{{internet.email}}")
    }
};

module.exports = fake;