class Box {
    //changing constructor to only take x and y as width and height are going to be same for all boxes now
    constructor(x, y) {
        //adding optional properties for box like density and friction
        var options = {
            'restitution' : 0.8,
            'density' : 1.0,
            'friction' : 1.3
        }

        this.boxBody = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(myWorld, this.boxBody);
    }

    display() {

        //capturing position and angle of the physics body
        var pos = this.boxBody.position;
        var angle = this.boxBody.angle;

        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        strokeWeight(3);
        stroke("green");
        fill("white");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}