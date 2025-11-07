import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.className =
      "fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "lighter"; 

    let particles = [];
    let mouse = { x: 0, y: 0 };
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      for (let i = 0; i < 4; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 80;
        this.hue = Math.random() * 60 + 200; 
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.size *= 0.96;
      }
      draw() {
        ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${this.life / 80})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
   
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      particles = particles.filter((p) => p.life > 0);
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      canvas.remove();
    };
  }, []);

  return null;
}
