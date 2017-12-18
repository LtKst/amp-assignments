class Point {
  constructor(canvas, context, x, y, r, color) {
    this.canvas = canvas;
    this.context = context;
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.color = color || "#000";
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

    this.drag();
  }

  drag() {
    let dragStatus = false;
    let distance;
    let rect = this.canvas.getBoundingClientRect();

    addEventListener("mousedown", (evt) => {
      let mousePosition = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };

      let dx, dy;
      dx = mousePosition.x - this.x;
      dy = mousePosition.y - this.y;

      let distance = Math.sqrt(dx * dx + dy * dy);

      dragStatus = distance < this.r;
    });

    addEventListener("mouseup", (evt) => {
      dragStatus = false;
    });

    addEventListener("mousemove", (evt) => {
      let mousePosition = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };

      if (dragStatus) {
        this.x = mousePosition.x;
        this.y = mousePosition.y;
      }
    });
  }
}
