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

  var dPos = getSpPoint(A, B, C);

  D.x = dPos.x;
  D.y = dPos.y;

  line2.drawLineByTwoPoints(C, D);

  A.draw();
  B.draw();
  C.draw();
}

function getSpPoint(A, B, C) {
  var x1 = A.x,
    y1 = A.y,
    x2 = B.x,
    y2 = B.y,
    x3 = C.x,
    y3 = C.y;
  var px = x2 - x1,
    py = y2 - y1,
    dAB = px * px + py * py;
  var u = ((x3 - x1) * px + (y3 - y1) * py) / dAB;
  var x = x1 + u * px,
    y = y1 + u * py;
  return {
    x: x,
    y: y
  };
}