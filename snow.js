class Snow {
    constructor(x, y, radius) {
        var options = {
            restitution: 1,
            friction: 1,
            density: 1
        }
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body);   

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}