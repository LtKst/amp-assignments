const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A = new Point(canvas, context, 100, 50, 10, "#0000FF");
var B = new Point(canvas, context, 300, 150, 10, "#0000FF");

var C = new Point(canvas, context, 200, 50, 10, "#0000FF");
var D = new Point(canvas, context, 0, 0, 10, "#FF0000");

var line1 = new Line(canvas, context, -0.3333, -133.33);
var line2 = new Line(canvas, context, -0.3333, -133.33);

setInterval(update, 10);

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  line1.drawLineByTwoPoints(A, B);

  var dPos = line2.getSpPoint(A, B, C);

  D.x = dPos.x;
  D.y = dPos.y;

  line2.drawLineByTwoPoints(C, D);

  A.draw();
  B.draw();
  C.draw();
}