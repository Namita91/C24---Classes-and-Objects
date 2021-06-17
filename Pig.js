class Pig {
    constructor(x, y) {
        var options = {
            'restitution' : 0.8,
            'density' : 1.0,
            'friction' : 1.0
        }

        this.pigBody = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 40;
        this.height = 40;
        World.add(myWorld, this.pigBody);
    }

    display() {

        var pos = this.pigBody.position;
        var angle = this.pigBody.angle;

        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        fill("green");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}