const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A = new Point(canvas, context, 100, 50, 10, "#0000FF");
var B = new Point(canvas, context, 300, 150, 10, "#0000FF");
var C = new Point(canvas, context, 200, 300, 10, "#FF0000");

var line = new Line(canvas, context, -0.3333,-133.33);

setInterval(update, 10);

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  line.drawLineByTwoPoints(A, B);

  if ((B.x - A.x) * (C.y - A.y) - (B.y - A.y) * (C.x - A.x) < 0) {
    C.color = "#00FF00";
  } else {
    C.color = "#FF0000";
  }

  A.draw();
  B.draw();
  C.draw();
}
