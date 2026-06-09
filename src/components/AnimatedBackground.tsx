import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      const offsetX = (time * 30) % gridSize;
      const offsetY = (time * 20) % gridSize;

      for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Floating particles
      for (let i = 0; i < 40; i++) {
        const x = ((Math.sin(time * 0.5 + i * 1.7) + 1) / 2) * canvas.width;
        const y = ((Math.cos(time * 0.3 + i * 2.1) + 1) / 2) * canvas.height;
        const size = Math.sin(time + i) * 1.5 + 2;
        const alpha = Math.sin(time * 0.8 + i) * 0.15 + 0.2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.fill();
      }

      // Glow orbs
      const drawOrb = (x: number, y: number, r: number, color: string) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      };

      drawOrb(
        canvas.width * 0.2 + Math.sin(time) * 50,
        canvas.height * 0.3 + Math.cos(time * 0.7) * 30,
        200,
        'rgba(14, 165, 233, 0.03)'
      );
      drawOrb(
        canvas.width * 0.8 + Math.cos(time * 0.5) * 40,
        canvas.height * 0.7 + Math.sin(time * 0.8) * 50,
        250,
        'rgba(6, 182, 212, 0.025)'
      );
      drawOrb(
        canvas.width * 0.5 + Math.sin(time * 0.6) * 60,
        canvas.height * 0.5 + Math.cos(time * 0.4) * 40,
        300,
        'rgba(34, 211, 238, 0.02)'
      );

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
