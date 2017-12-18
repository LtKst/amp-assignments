class Line {
  constructor(canvas, context, slope, yIntercept) {
    this.canvas = canvas;
    this.context = context;

    this.slope = slope;
    this.yIntercept = yIntercept;
  }

  calcY(x) {
    return x * this.slope + this.yIntercept;
  }

  drawLineByTwoPoints(a, b) {
    let slope = (b.y - a.y) / (b.x - a.x); // Slope
    let yIntercept = b.y - (slope * b.x);
    let y1 = (slope * 0) + yIntercept;
    let y2 = (slope * this.canvas.width) + yIntercept;

    this.context.beginPath();

    this.context.moveTo(0, y1);
    this.context.lineTo(this.canvas.width, y2);

    this.context.lineWidth = 2;
    this.context.strokeStyle = '#000';

    this.context.fill();
    this.context.stroke();

    this.context.closePath();

    // a = slope
    // b = intercept
    // a*x + b*y = c
    // Also called Standart Line Forumla
  }
}
