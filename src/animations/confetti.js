const Confetti = {
  animationFrameId: null,
  canvas: null,

  start: () => {
    if (Confetti.canvas) {
      return;
    }

    const canvas = document.createElement("canvas");
    Confetti.canvas = canvas;
    document.body.appendChild(canvas);

    const context = canvas.getContext("2d");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#900C3F"];
    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      dx: Math.random() * 4 - 2,
      dy: Math.random() * 4 + 2,
      size: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        context.fillStyle = particle.color;
        context.fillRect(particle.x, particle.y, particle.size, particle.size);
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.y > canvas.height) particle.y = 0;
      });

      Confetti.animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  },

  stop: () => {
    if (Confetti.animationFrameId) {
      cancelAnimationFrame(Confetti.animationFrameId);
      Confetti.animationFrameId = null;
    }
    if (Confetti.canvas) {
      Confetti.canvas.remove();
      Confetti.canvas = null;
    }
  },
};

export default Confetti;
