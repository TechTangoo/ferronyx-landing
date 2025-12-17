import React, { useEffect, useRef } from 'react';

const DotBackground = ({
    color = '#3b82f6', // Default blue-500
    spacing = 30,
    radius = 1,
    opacity = 0.2
}) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouseX = -1000;
        let mouseY = -1000;

        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const draw = () => {
            if (!ctx || !canvas) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Grid calculations
            const cols = Math.floor(canvas.width / spacing) + 1;
            const rows = Math.floor(canvas.height / spacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;
                    
                    // Calculate distance to mouse
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 200;
                    
                    // Base scale
                    let scale = 1;
                    let alpha = opacity;

                    // Mouse interaction effect
                    if (distance < maxDist) {
                        const factor = (maxDist - distance) / maxDist;
                        scale = 1 + factor * 1.5; // Scale up to 2.5x
                        alpha = opacity + factor * 0.5; // Increase opacity
                    }

                    ctx.beginPath();
                    ctx.arc(x, y, radius * scale, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    ctx.globalAlpha = alpha;
                    ctx.fill();
                }
            }
            
            // Restore context for next frame
            ctx.globalAlpha = 1;
            
            // animationFrameId = requestAnimationFrame(draw); 
            // We don't need continuous loop if only reacting to mouse, 
            // but for smooth decay or other effects we might. 
            // For simple distance check, we can just redraw on mousemove + resize.
            // But let's keep RAF for potential expansion (e.g. waves).
            animationFrameId = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, spacing, radius, opacity]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <canvas ref={canvasRef} className="block" />
        </div>
    );
};

export default DotBackground;
