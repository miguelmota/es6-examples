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

var dexter = Object.create(Person);
var job = Object.create(Job);

Object.setPrototypeOf(dexter, job);

dexter.speak(); // 'Howdy'
dexter.work(); // 'Working'
