let canvas = document.getElementById("canvas1");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext("2d"); // master object (x,y , width , height)

var radius = 40;
let x = innerWidth / 2;
let y = innerHeight / 2;
let x1 = innerHeight / 2;
let y1 = innerWidth / 2;
console.log(x, y);
let dx = 4;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false); //

  c.strokeStyle = "blue";
  c.fillStyle = "yellow";
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  x += dx;

  c.beginPath();
  c.arc(y1, x1, radius, 0, Math.PI * 2, false); //

  c.strokeStyle = "blue";   //  
  c.fillStyle = "yellow";    //
  c.fill();
  c.stroke();

  if (x1 + radius > innerHeight || x1 - radius < 0) {
    dx = -dx;
  }
  x1 += dx;
}

animate();
