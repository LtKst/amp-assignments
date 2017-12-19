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

  checkLineIntersection(line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY) {
    var denominator, a, b, numerator1, numerator2, result = {
      x: null,
      y: null,
      onLine1: false,
      onLine2: false
    };
    denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (line1EndY - line1StartY));
    if (denominator == 0) {
      return result;
    }
    a = line1StartY - line2StartY;
    b = line1StartX - line2StartX;
    numerator1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
    numerator2 = ((line1EndX - line1StartX) * a) - ((line1EndY - line1StartY) * b);
    a = numerator1 / denominator;
    b = numerator2 / denominator;


    result.x = line1StartX + (a * (line1EndX - line1StartX));
    result.y = line1StartY + (a * (line1EndY - line1StartY));

    if (a > 0 && a < 1) {
      result.onLine1 = true;
    }

    if (b > 0 && b < 1) {
      result.onLine2 = true;
    }

    return result;
  };
}