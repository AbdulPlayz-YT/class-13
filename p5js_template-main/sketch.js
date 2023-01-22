var ball = {
  x:45,y:125,r:75, xspeed:0, yspeed:0, colour:["blue","red","purple"]
};




function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.r);
  fill(ball.colour[0]);
  ball.xspeed = 1;
  ball.x = ball.x + ball.xspeed;
}