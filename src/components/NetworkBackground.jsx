import React, { useEffect, useRef } from 'react';
import { colors } from '../utils/colors';

function NetworkBackground({ animate = false, density = 'normal' }) {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Node configuration based on density
        const nodeCount = density === 'light' ? 15 : density === 'heavy' ? 40 : 25;

        // Create nodes (representing robots in the fleet)
        const nodes = Array.from({ length: nodeCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3, // Very slow movement
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() > 0.8 ? 2.5 : 1.5, // Some nodes slightly larger
            isActive: Math.random() > 0.7, // 30% chance of being "active" robot
            pulsePhase: Math.random() * Math.PI * 2,
            pulseIntensity: 0, // For data packet pulse effect
            stateChangeTimer: Math.random() * 500 + 300 // Random timer for state changes
        }));

        // Data packets traveling along connections
        const dataPackets = [];
        const maxPackets = animate ? 3 : 0;

        // Connections for data packets
        const connections = [];

        // Build initial connections
        const buildConnections = () => {
            connections.length = 0;
            nodes.forEach((node, i) => {
                nodes.slice(i + 1).forEach(otherNode => {
                    const dx = node.x - otherNode.x;
                    const dy = node.y - otherNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        connections.push({ from: node, to: otherNode, distance });
                    }
                });
            });
        };
        buildConnections();

        let animationFrame;
        let frame = 0;
        let nextPacketSpawn = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update node positions if animated
            if (animate) {
                nodes.forEach(node => {
                    node.x += node.vx;
                    node.y += node.vy;

                    // Bounce off edges
                    if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                    // Update pulse
                    node.pulsePhase += 0.02;

                    // Decay pulse intensity
                    if (node.pulseIntensity > 0) {
                        node.pulseIntensity -= 0.05;
                    }

                    // Random state changes (robot coming online/offline)
                    node.stateChangeTimer--;
                    if (node.stateChangeTimer <= 0) {
                        node.isActive = Math.random() > 0.7;
                        node.stateChangeTimer = Math.random() * 500 + 300;
                    }
                });

                // Rebuild connections after movement
                if (frame % 30 === 0) {
                    buildConnections();
                }

                // Spawn data packets
                if (dataPackets.length < maxPackets && frame > nextPacketSpawn) {
                    if (connections.length > 0) {
                        const conn = connections[Math.floor(Math.random() * connections.length)];
                        dataPackets.push({
                            from: conn.from,
                            to: conn.to,
                            progress: 0,
                            speed: 0.01 + Math.random() * 0.01
                        });
                        nextPacketSpawn = frame + Math.random() * 60 + 30;
                    }
                }

                // Update data packets
                for (let i = dataPackets.length - 1; i >= 0; i--) {
                    const packet = dataPackets[i];
                    packet.progress += packet.speed;

                    // Pulse nodes when packet passes through
                    if (packet.progress > 0.4 && packet.progress < 0.6) {
                        packet.to.pulseIntensity = Math.max(packet.to.pulseIntensity, 0.5);
                    }

                    if (packet.progress >= 1) {
                        dataPackets.splice(i, 1);
                    }
                }
            }

            // Mouse proximity effect
            const mouse = mouseRef.current;

            // Draw connection lines (representing unified platform)
            ctx.lineWidth = 1;
            nodes.forEach((node, i) => {
                nodes.slice(i + 1).forEach(otherNode => {
                    const dx = node.x - otherNode.x;
                    const dy = node.y - otherNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Only connect nearby nodes (max 150px apart)
                    if (distance < 150) {
                        // Calculate mouse proximity effect
                        const midX = (node.x + otherNode.x) / 2;
                        const midY = (node.y + otherNode.y) / 2;
                        const mouseDx = midX - mouse.x;
                        const mouseDy = midY - mouse.y;
                        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
                        const mouseProximity = Math.max(0, 1 - mouseDistance / 200);

                        let baseOpacity = (1 - distance / 150) * 0.05; // Increased from 0.02
                        const opacity = baseOpacity + mouseProximity * 0.08; // Increased from 0.03

                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = 1.5; // Slightly thicker
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.stroke();
                    }
                });
            });

            // Draw data packets
            dataPackets.forEach(packet => {
                const x = packet.from.x + (packet.to.x - packet.from.x) * packet.progress;
                const y = packet.from.y + (packet.to.y - packet.from.y) * packet.progress;

                // Packet glow - more prominent
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
                gradient.addColorStop(0, 'rgba(37, 99, 235, 0.8)'); // Increased
                gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, Math.PI * 2);
                ctx.fill();

                // Packet core - brighter
                ctx.fillStyle = 'rgba(37, 99, 235, 1)';
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw nodes (representing individual robots)
            nodes.forEach(node => {
                // Mouse proximity effect
                const nodeDx = node.x - mouse.x;
                const nodeDy = node.y - mouse.y;
                const nodeMouseDistance = Math.sqrt(nodeDx * nodeDx + nodeDy * nodeDy);
                const nodeMouseProximity = Math.max(0, 1 - nodeMouseDistance / 150);

                if (node.isActive) {
                    // Active robot - subtle blue glow
                    const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
                    const packetPulse = node.pulseIntensity;
                    const totalPulse = Math.min(pulse + packetPulse, 1.5);
                    const glowSize = node.radius * 3 * (1 + packetPulse * 0.5);

                    // Outer glow (enhanced by mouse proximity) - MORE VISIBLE
                    const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize);
                    const glowOpacity = 0.3 * totalPulse + nodeMouseProximity * 0.2; // Doubled
                    gradient.addColorStop(0, `rgba(37, 99, 235, ${glowOpacity})`);
                    gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
                    ctx.fill();

                    // Core node - blue and brighter
                    const coreOpacity = 0.7 * totalPulse + nodeMouseProximity * 0.3; // Increased
                    ctx.fillStyle = `rgba(37, 99, 235, ${coreOpacity})`;
                } else {
                    // Inactive/idle robot - more visible (brightens on mouse proximity)
                    const baseOpacity = 0.1 + nodeMouseProximity * 0.15; // Increased
                    ctx.fillStyle = `rgba(255, 255, 255, ${baseOpacity})`;
                }

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            frame++;
            if (animate) {
                animationFrame = requestAnimationFrame(draw);
            }
        };

        draw();
        if (animate) {
            animationFrame = requestAnimationFrame(draw);
        }

        // Mouse tracking at window level (since canvas has pointer-events-none)
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Only update if mouse is over canvas area
            if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
                mouseRef.current.x = x;
                mouseRef.current.y = y;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [animate, density]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: animate ? 0.9 : 0.5 }}
        />
    );
}

export default NetworkBackground;
