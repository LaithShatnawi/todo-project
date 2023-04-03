let userName = prompt("Please enter your Name:");
let userGender = prompt("Please enter your gender (male/female):");
let userAge = prompt("Please enter your age:");

if (userAge <= 0){
alert("the age you entered is not correct");
};

let welcomingMsg = confirm("Would you like to skip the welcoming message?");

if (userName != null){
if (welcomingMsg == false) {
  if(userGender == "male"){
    alert(`Welcome Mr ${userName}`);
  }
  else if (userGender == "female"){
alert(`Welcome Ms ${userName}`);
  }
  else {
alert(`Welcome ${userName}`);
  }
}
};
(function () {
  var c = document.getElementById("c"),
    ctx = c.getContext("2d");
  var bodyElement = document.getElementsByTagName('body');
  c.width = innerWidth;
  c.height = bodyElement[0].offsetHeight;

  var lines = [],
    maxSpeed = 5,
    spacing = 5,
    xSpacing = 0,
    n = innerWidth / spacing,
    colors = ["#3B8686", "#79BD9A", "#A8DBA8", "#0B486B"],
    i;

  for (i = 0; i < n; i++) {
    xSpacing += spacing;
    lines.push({
      x: xSpacing,
      y: Math.round(Math.random() * c.height),
      width: 2,
      height: Math.round(Math.random() * (innerHeight / 10)),
      speed: Math.random() * maxSpeed + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  function draw() {
    var i;
    ctx.clearRect(0, 0, c.width, c.height);

    for (i = 0; i < n; i++) {
      ctx.fillStyle = lines[i].color;
      ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
      lines[i].y += lines[i].speed;

      if (lines[i].y > c.height) lines[i].y = 0 - lines[i].height;
    }

    requestAnimationFrame(draw);
  }

  draw()
})();

