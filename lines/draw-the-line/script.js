const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A = new Point(canvas, context, 100, 50, 10, "#FF0000");
var B = new Point(canvas, context, 300, 150, 10, "#FF0000");

var line = new Line(canvas, context, -0.3333,-133.33);

setInterval(update, 10);

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  line.drawLineByTwoPoints(A, B);

  A.draw();
  B.draw();
}
