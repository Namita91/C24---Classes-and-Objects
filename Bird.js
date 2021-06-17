class Bird {
    //changing constructor to only take x and y as width and height are going to be same for all boxes now
    constructor(x, y) {
        //adding optional properties for box like density and friction
        var options = {
            'restitution' : 0.8,
            'density' : 1.0,
            'friction' : 1.0
        }

        this.birdBody = Bodies.rectangle(x, y, 35, 35, options);
        this.width = 35;
        this.height = 35;
        World.add(myWorld, this.birdBody);
    }

    display() {

        //till we havve the catapult ready, we will make the bird object move with mouse
        var pos = this.birdBody.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.birdBody.angle;

        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}