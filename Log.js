class Log {
    //including angle parameter in constructor as log objects would be at different angles
    //removing width from constructor as logs will have a fixed width
    constructor(x, y, h, angle) {
        var options = {
            'restitution' : 0.8,
            'density' : 1.0,
            'friction' : 1.3
        }

        this.logBody = Bodies.rectangle(x, y, 20, h, options);
        this.width = 15;
        this.height = h;
        World.add(myWorld, this.logBody);
        //setting angle for the object
        Body.setAngle(this.logBody, angle);
    }

    display() {

        var pos = this.logBody.position;
        var angle = this.logBody.angle;

        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        strokeWeight(3);
        stroke("brown");
        fill("white");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}