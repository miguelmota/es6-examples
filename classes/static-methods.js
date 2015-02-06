class Point {
    static zero() {
        return new Point(0,0);
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let p = Point.zero();
