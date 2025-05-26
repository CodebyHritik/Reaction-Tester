//Store the time when the box appears
var timestart = new Date().getTime();

//Function to generate a random colors for the box
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//// Function to move and style the box randomly
function move(){
    var left;
    var top;
    var wh;
    //Generate random position (left & top) within 300px range
    left = Math.random()*300;
    top = Math.random()*300;
    //Generate random position (left & top) between 100px to 400px range
    wh = ((Math.random()*400) +100);

    // Set the style properties for the box
    document.getElementById("boxshape").style.left = left + "px";
    document.getElementById("boxshape").style.top = top + "px";
    document.getElementById("boxshape").style.width = wh +"px";
    document.getElementById("boxshape").style.height = wh +"px";
    document.getElementById("boxshape").style.display = "block";
    document.getElementById("boxshape").style.backgroundColor = getRandomColor();
    timestart = new Date().getTime();
}
//Function call to display the box
move();
document.getElementById("boxshape").onclick = function(){
    document.getElementById("boxshape").style.display="none";
    var timeend = new Date().getTime();
    // Calculate reaction time in seconds
    var timetaken = (timeend - timestart)/1000 + " sec";
    // Show the reaction time in an alert
    alert(timetaken);
    // function call again to show the box in a new random position
    move();
}