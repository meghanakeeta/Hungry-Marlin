var foodEaten = 0;
var px = 0;
var py = 0;
var foody = 2;
var start = 0;
var stop= 0;
var time;

onEvent("Begin", "click", function(event) {
  console.log("Begin clicked!");
  setScreen("Controls");
});
onEvent("StartGame", "click", function(event) {
  console.log("StartGame clicked!");
  start = getTime();
  setScreen("Game");
  setActiveCanvas("canvas");
  setFillColor("#ffffff");
  line(1, 1, 299, 1);
  line(1, 1, 1, 374);
  line(299, 374, 299, 1);
  line(299, 374, 1, 374);
  randomfood();
});
onEvent("Game", "keydown", function(event) {
  if(event.key == "Up") {
    console.log("UP");
    if(py != 0) {
      py--;
      set();
    }
    check();
  }
  if(event.key == "Down") {
    console.log("DOWN");
    if(py != 4) {
      py++;
      set();
    }
    check();
  }
  if(event.key == "Left") {
    console.log("LEFT");
    if(px != 0) {
      px--;
      set();
    }
    check();
  }
  if(event.key == "Right") {
    console.log("RIGHT");
    if(px != 3) {
      px++;
      set();
    }
    check();
  }
});

function transX(regx) {
  return regx*75+10;
}

function transY(regy) {
  return regy*75+60;
}

function set() {
  setPosition("Marlin", transX(px), transY(py), 75, 75);
}
function setFood() {
  setPosition("Food", transX(foodx), transY(foody), 50, 50);
}

function randomfood() {
  foodx = randomNumber(0, 3);
  foody = randomNumber(0, 4);
  setFood();
}

function check() {
  if(px == foodx && py == foody) {
    foodEaten++;
    randomfood();
    setText("Score", foodEaten);
  }
  
  if(foodEaten == 10) {
    stop = getTime();
    time = stop - start;
    setScreen("End");
    console.log(time);
    setText("time", Math.round(time/1000));
  }
}
onEvent("Restart", "click", function(event) {
  console.log("Restart clicked!");
  setScreen("Game");
  foodEaten = 0;
  start = getTime();
});
onEvent("Begin", "click", function( ) {
  
});