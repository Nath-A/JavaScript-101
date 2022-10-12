`use strict;`

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,



    calcAge: function ()
    {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function ()
    {
        return `${this.firstName} is a ${this.age}-year old teacher. and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }

}

console.log(jonas.getSummary());
