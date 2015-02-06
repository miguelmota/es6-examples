// untested

class Person {
    speak() {
        return 'Howdy';
    }
}

class Job {
    work() {
        return 'Working';
    }
}

Object.assign(Person, Job);

var dexter = Object.create(Person);

dexter.speak(); // 'Howdy'
dexter.work(); // 'Working'
