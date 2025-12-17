import React, { useEffect, useRef } from 'react';

const Orb = ({
  hue = 220, // Default blueish
  hoverIntensity = 0.2,
  rotateOnHover = true,
  brightness = 1,
  size = 100 // Size in % of container
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // Configuration
  const config = {
      baseSpeed: 0.005,
      turbulence: 0.8, // How "wobbly" the orb is
      colorVariability: 40, // Range of hue variation
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let time = 0;
    
    // Orb Particles (blobs)
    // We simulate an orb by drawing multiple overlapping soft gradients
    const particles = [
        { x: 0, y: 0, r: 0, vx: 0.5, vy: 0.3, phase: 0 },
        { x: 0, y: 0, r: 0, vx: -0.4, vy: 0.6, phase: 2 },
        { x: 0, y: 0, r: 0, vx: 0.7, vy: -0.2, phase: 4 },
    ];

    const resize = () => {
        const { clientWidth, clientHeight } = canvas.parentElement;
        // Set actual canvas size to be larger for better blur quality? 
        // Or keep it 1:1. 1:1 is fine for soft shapes.
        canvas.width = clientWidth;
        canvas.height = clientHeight;
    };

    const draw = () => {
        if (!canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Center of canvas
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const minDim = Math.min(canvas.width, canvas.height);
        const baseRadius = (minDim * (size / 100)) / 2;

        time += config.baseSpeed;

        // Composite mode for blending
        ctx.globalCompositeOperation = 'screen'; 
        // 'screen' or 'lighter' works well for glowing light. 
        // But for a solid orb, maybe 'source-over' with opacity.
        // Let's stick to standard blending but with gradients.
        ctx.globalCompositeOperation = 'source-over';

        particles.forEach((p, i) => {
            // Move particles in a Lissajous-like pattern around the center
            const wobbleX = Math.sin(time * p.vx + p.phase) * (baseRadius * 0.3 * config.turbulence);
            const wobbleY = Math.cos(time * p.vy + p.phase) * (baseRadius * 0.3 * config.turbulence);
            
            const x = cx + wobbleX;
            const y = cy + wobbleY;
            
            // Pulsate radius
            const r = baseRadius * (0.8 + Math.sin(time * 2 + i) * 0.2);

            // Create Gradient
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
            
            // Dynamic Color
            const currentHue = hue + Math.sin(time + i) * config.colorVariability;
            
            // Core
            gradient.addColorStop(0, `hsla(${currentHue}, 80%, 70%, 0.8)`);
            // Middle
            gradient.addColorStop(0.5, `hsla(${currentHue}, 80%, 50%, 0.4)`);
            // Edge
            gradient.addColorStop(1, `hsla(${currentHue}, 80%, 30%, 0)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        });

        // Add a global "shine" or "rim" if desired?
        // Actually, let's blur the whole canvas via CSS for that super soft look
        
        animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    };
  }, [hue, size]);

  return (
    <div 
        ref={containerRef} 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
    >
        <canvas 
            ref={canvasRef} 
            className="w-full h-full opacity-80 blur-[80px]" // High blur is key for the "Orb" look
            style={{ 
                transform: 'scale(1.2)' // Scale up to avoid hard edges at canvas bounds if any
            }}
        />
    </div>
  );
};

export default Orb;
