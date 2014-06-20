// untested

var person = {
    type: 'human',
    speak() {
        return 'Howdy';
    }
};

var dexter = Object.create(person);

dexter.speak(); // 'Howdy'
