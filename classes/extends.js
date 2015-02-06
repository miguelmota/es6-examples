class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

console.log((new Point(1,2)).toString()); // (1,2)

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // same as super.constructor(x, y)
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super();
    }
}
