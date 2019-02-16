var MAX_NUM;
var particles = new Array();
var dist_threshold = 150;


function setup() {
  // createCanvas(windowWidth, windowHeight-50);
  createCanvas(displayWidth, displayHeight-50);
  MAX_NUM = floor(displayWidth/100)*floor(displayHeight/100);
  for (let i = 0; i < MAX_NUM; i++)
  {
    particles.push(new Particle());
  }
}

function draw() {
  background(49, 47, 53);
  for (let i = 0; i < MAX_NUM; i++)
  {
    let particleinThreshold = new Array();
    particles[i].run();
    for (let j= i+1; j < MAX_NUM; j++)
    {
        if (particles[i].judgeThreshold(particles[j])) {
          particleinThreshold.push(particles[j]);
        }
    }
    // console.log(particleinThreshold.length);
    
    if (particleinThreshold.length >=2) {
      for (let k = 0; k< particleinThreshold.length; k++) {
        
        for (let h = k+1; h< particleinThreshold.length; h++) {
          if (particleinThreshold[k].judgeThreshold(particleinThreshold[h])) {
            var newTriangle = new Triangle(particles[i].position, particleinThreshold[k].position, particleinThreshold[h].position);
            newTriangle.display();
          }
        }
      }
    }
  }

}

// define particle class
var Particle = function() {
  this.velocity = createVector(random(-2,2),random(-2,2));
  this.position = createVector(random(0,width),random(0,width));
  // this.acceleration = createVector(random(0,1),random(0,1));
}

Particle.prototype.run = function() {
  this.update();
  this.display();
}

Particle.prototype.update = function() {
  // this.velocity.add(this.acceleration);
  if(this.position.x >= width || this.position.x <=0 ) {
    this.velocity.x = -this.velocity.x;
  }
  if(this.position.y >= height || this.position.y <=0 ) {
    this.velocity.y = -this.velocity.y;
  }
  this.position.add(this.velocity);
}

Particle.prototype.display = function() {
  fill(246, 8, 83, random(10,20)*5);
  noStroke();
  ellipse(this.position.x, this.position.y, 4,4);
}

Particle.prototype.judgeThreshold = function(pOther) {
  var distanceBetween =  abs(dist(pOther.position.x, pOther.position.y, this.position.x, this.position.y));
  if (distanceBetween <= dist_threshold && distanceBetween > 0) {
    return true;
  }
  else {
    return false;
  }
}

//Define the triangle
var Triangle = function(vector1, vector2, vector3) {
  this.vector1 = vector1;
  this.vector2 = vector2;
  this.vector3 = vector3;
}

Triangle.prototype.display = function() {
  fill(246, 8, 83, random(5,10)*10);
  noStroke();
  triangle(this.vector1.x, this.vector1.y, this.vector2.x, this.vector2.y, this.vector3.x, this.vector3.y);
}

