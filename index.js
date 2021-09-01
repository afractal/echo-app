

const draw = () => {
  const canvasElement = document.getElementById("canvas");
  const ctx = canvasElement.getContext("2d");

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`;
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
};

// window.requestAnimationFrame(draw);






