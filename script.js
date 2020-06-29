



   





//The greeting
const yourAnswer = prompt('Who are you?', 'Type your name');

let action = null;

while(action !== 'stop'){
    action = prompt('Do you wish to Attack or Retreat?', 'Choose';)
}

//Our ship
function Ship() {
    this.x = width / 2;
    this.xdir = 0;
  
    this.show = function() {
      fill(255);
      rectMode(CENTER);
      rect(this.x, height - 20, 20, 60);
    };
  
    this.setDir = function(dir) {
      this.xdir = dir;
    };
  
    this.move = function(dir) {
      this.x += this.xdir * 5;
    };
  }

  //The enemy ships

  function Yeetlings(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;
  
    this.xdir = 1;
  
    this.destroy = function() {
      this.r = this.r - 5;
    };
  
    this.shiftDown = function() {
      this.xdir *= -1;
      this.y += this.r;
    };
  
    this.move = function() {
      this.x = this.x + this.xdir;
    };
  
    this.show = function() {
      noStroke();
      fill(255, 0, 200, 150);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };
  }

  //The lasers

  function Firepower(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;
  
    this.show = function() {
      noStroke();
      fill(150, 0, 255);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };
  
    this.damage = function() {
      this.toDelete = true;
    };
  
    this.hits = function(yeetling) {
      var d = dist(this.x, this.y, yeetling.x, yeetling.y);
      if (d < this.r + yeetling.r) {
        return true;
      } else {
        return false;
    };
  
        }
  this.move = function() {
      this.y = this.y - 5;
    };
  }

  //Canvas

  var ship;
var yeetlings = [];
var firepower = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    yeetlings[i] = new Yeetling(i * 80 + 80, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();

  for (var i = 0; i < firepower.length; i++) {
    firepower[i].show();
    firepower[i].move();
    for (var j = 0; j < yeetlings.length; j++) {
      if (firepower[i].hits(yeetlings[j])) {
        yeetlings[j].destroy();
        firepower[i].damage();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < yeetlings.length; i++) {
    yeetlings[i].show();
    yeetlings[i].move();
    if (yeetlings[i].x > width || yeetlings[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < yeetlings.length; i++) {
    yeetlings[i].shiftDown();
    }
  }

  for (var i = firepower.length - 1; i >= 0; i--) {
    if (firepower[i].toDelete) {
      firepower.splice(i, 1);
    }
  }
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (key === ' ') {
    var laser = new Laser(ship.x, height);
    firepower.push(laser);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}

function box(){
  var userval = confirm("Do you accept your mission?")
  if (userval== true)
  {
      document.write("Fire at the enemy YEETIAN until ship is destroyed.");
  }
  else{
      document.write("Hope you have another planet you plan on moving to.");
  }
}