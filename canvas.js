let canvas = document.getElementById("canvas1");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext("2d"); // master object (x,y , width , height)
c.strokeStyle = "rgba(255,0,0,0.7)";
var radius = 100,
  radius1 = 40;

let x = innerWidth / 2;
let x1 = innerWidth / 2;
let y = innerHeight / 2;
let y1 = innerHeight / 2;
let dx = 4;

/* for (let i = 0; i < 10; i++) {
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false); //
  c.strokeStyle = "blue";
  c.fillStyle = "yellow";
  c.fill();
  c.stroke();
} */

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false); //
  c.strokeStyle = "blue";
  c.fillStyle = "purple";
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || y + radius > innerHeight) {
    dx = -dx;
  }
  // x += dx;
  radius += dx;

  if (radius1 == 0) {
    dx = -dx;
  }
  c.beginPath();
  c.arc(x1, y1, radius1, 0, Math.PI * 2, false); //
  c.strokeStyle = "blue";
  c.fillStyle = "yellow";
  c.fill();
  c.stroke();
  // x += dx;
  radius1 += dx;
}

animate();
