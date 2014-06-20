// untested

class Speaker(name) {
    this.name = name;
    this.years = 0;

    speak(message) {
        return `${this.name}: ${message}`;
    }

    get age() {
        return this.years();
    }

    set age(years) {
        if (Number.isFinite(years)) {
            this.years = years;
        }
    }
}
