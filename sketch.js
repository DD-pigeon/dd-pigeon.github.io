let points = [];
let point_count;
let point_speed;
let point_color;
let point_stroke_weight;
let line_color;
let line_stroke_weight;

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.xs = random(-point_speed, point_speed);
    this.ys = random(-point_speed, point_speed);

    this.render = function() {
        point(this.x, this.y);
    }

    this.update = function() {
        this.x += this.xs;
        this.y += this.ys;

        if (this.x > width || this.x < 0)
            this.xs *= -1;
        if (this.y > height || this.y < 0)
            this.ys *= -1;
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    stroke(255, 150);

    // Change these!
    point_count = 90;
    point_speed = 2;
    point_color = color(60, 60, 60);
    point_stroke_weight = 4;
    line_color = color(30, 30, 30);
    line_stroke_weight = 0.2;
    // ---

    for (var i = 0; i < point_count; i++) {
        points.push(new Point(random(width), random(height)))
    }
}

function draw() {
    background(113, 121, 126);
    for (var i = 0; i < points.length; i++) {
        points[i].update();

        stroke(line_color);
        strokeWeight(line_stroke_weight);
        for (var j = 0; j < points.length; j++) {
            if (j != i) {
                if (dist(points[i].x, points[i].y, points[j].x, points[j].y) < 150) {
                    line(points[i].x, points[i].y, points[j].x, points[j].y);
                }
            }
        }

        stroke(point_color);
        strokeWeight(point_stroke_weight);
        points[i].render();
    }
}