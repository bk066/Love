// static/script.js
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 3, x, y + size);
  ctx.bezierCurveTo(x + size, y - size / 3, x, y - size / 2, x, y);
  ctx.fillStyle = '#d46b75';
  ctx.fill();
}

let size = 30;
let growing = true;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  drawHeart(x, y, size);

  if (growing) {
    size += 0.5;
    if (size >= 40) growing = false;
  } else {
    size -= 0.5;
    if (size <= 30) growing = true;
  }

  requestAnimationFrame(animate);
}

animate();
