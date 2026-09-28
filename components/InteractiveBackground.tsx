import React, { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const InteractiveBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    const colorConfigRef = useRef({
        particleColor: 'rgba(249, 168, 212, 0.9)',
        connectionColorRGB: '229, 231, 235',
        lineOpacityMultiplier: 1.2
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            const rootStyles = getComputedStyle(document.documentElement);
            colorConfigRef.current = {
                particleColor: rootStyles.getPropertyValue('--color-constellation-particle').trim(),
                connectionColorRGB: rootStyles.getPropertyValue('--color-constellation-lines').trim(),
                lineOpacityMultiplier: parseFloat(rootStyles.getPropertyValue('--constellation-line-opacity-multiplier').trim())
            };
        }, 50);

        return () => clearTimeout(timer);
    }, [theme]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = canvas?.parentElement;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !parent || !ctx) return;

        let animationFrameId: number;
        const particles: Particle[] = [];
        const interactionPoint = { x: -1000, y: -1000, radius: 150 };
        
        const gradientColors = {
            blue: [96, 165, 250],   // #60A5FA
            violet: [124, 107, 241], // #7C6BF1
            pink: [244, 114, 182]    // #F472B6
        };
        
        const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

        const setCanvasSize = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            vx: number;
            vy: number;
            baseVx: number;
            baseVy: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 1 + 0.5;
                this.baseVx = (Math.random() - 0.5) * 0.3;
                this.baseVy = (Math.random() - 0.5) * 0.3;
                this.vx = this.baseVx;
                this.vy = this.baseVy;
            }

            draw() {
                if (!ctx) return;
                const dx = interactionPoint.x - this.x;
                const dy = interactionPoint.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let color = colorConfigRef.current.particleColor;
                let opacity = parseFloat(color.split(',')[3] || '0.9');

                if (distance < interactionPoint.radius) {
                    const progress = 1 - (distance / interactionPoint.radius);
                    let r, g, b;

                    if (progress < 0.5) {
                        const t = progress * 2;
                        r = lerp(gradientColors.blue[0], gradientColors.violet[0], t);
                        g = lerp(gradientColors.blue[1], gradientColors.violet[1], t);
                        b = lerp(gradientColors.blue[2], gradientColors.violet[2], t);
                    } else {
                        const t = (progress - 0.5) * 2;
                        r = lerp(gradientColors.violet[0], gradientColors.pink[0], t);
                        g = lerp(gradientColors.violet[1], gradientColors.pink[1], t);
                        b = lerp(gradientColors.violet[2], gradientColors.pink[2], t);
                    }
                    color = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${opacity})`;
                }
                
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                if (!canvas) return;

                this.x += this.vx;
                this.y += this.vy;

                if (this.x > canvas.width + this.size) this.x = -this.size;
                if (this.x < -this.size) this.x = canvas.width + this.size;
                if (this.y > canvas.height + this.size) this.y = -this.size;
                if (this.y < -this.size) this.y = canvas.height + this.size;
            }
        }
        
        const init = () => {
            particles.length = 0;
            if (canvas.width === 0 || canvas.height === 0) return;
            const isMobile = canvas.width <= 768;
            const particleDensity = isMobile ? 20000 : 9000;
            const numberOfParticles = (canvas.width * canvas.height) / particleDensity;
            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }
        };

        const connect = () => {
            if (!ctx) return;
            const { connectionColorRGB, lineOpacityMultiplier } = colorConfigRef.current;

            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = Math.sqrt(
                        Math.pow(particles[a].x - particles[b].x, 2) +
                        Math.pow(particles[a].y - particles[b].y, 2)
                    );
                    
                    if (distance < 120) {
                        const opacityValue = 1 - (distance / 120);
                        ctx.strokeStyle = `rgba(${connectionColorRGB}, ${opacityValue * lineOpacityMultiplier})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            if (interactionPoint.x !== -1000) {
                for (let i = 0; i < particles.length; i++) {
                    const distanceToInteraction = Math.sqrt(
                        Math.pow(particles[i].x - interactionPoint.x, 2) +
                        Math.pow(particles[i].y - interactionPoint.y, 2)
                    );

                    if (distanceToInteraction < interactionPoint.radius * 1.5) {
                        const progress = 1 - (distanceToInteraction / (interactionPoint.radius * 1.5));
                        let r, g, b;
                        if (progress < 0.5) {
                            const t = progress * 2;
                            r = lerp(gradientColors.blue[0], gradientColors.violet[0], t);
                            g = lerp(gradientColors.blue[1], gradientColors.violet[1], t);
                            b = lerp(gradientColors.blue[2], gradientColors.violet[2], t);
                        } else {
                            const t = (progress - 0.5) * 2;
                            r = lerp(gradientColors.violet[0], gradientColors.pink[0], t);
                            g = lerp(gradientColors.violet[1], gradientColors.pink[1], t);
                            b = lerp(gradientColors.violet[2], gradientColors.pink[2], t);
                        }
                        
                        const opacityValue = progress * lineOpacityMultiplier * 1.5;
                        ctx.strokeStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${opacityValue})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(interactionPoint.x, interactionPoint.y);
                        ctx.lineTo(particles[i].x, particles[i].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = parent.getBoundingClientRect();
            interactionPoint.x = event.clientX - rect.left;
            interactionPoint.y = event.clientY - rect.top;
        };

        const handleMouseOut = () => {
            interactionPoint.x = -1000;
            interactionPoint.y = -1000;
        };
        
        const handleTouchUpdate = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                const rect = parent.getBoundingClientRect();
                interactionPoint.x = event.touches[0].clientX - rect.left;
                interactionPoint.y = event.touches[0].clientY - rect.top;
            }
        };

        const handleTouchEnd = () => {
            interactionPoint.x = -1000;
            interactionPoint.y = -1000;
        };
        
        const handleResize = () => {
            requestAnimationFrame(() => {
                setCanvasSize();
                init();
            });
        };
        
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(parent);

        animate();

        parent.addEventListener('mousemove', handleMouseMove);
        parent.addEventListener('mouseout', handleMouseOut);
        parent.addEventListener('touchstart', handleTouchUpdate, { passive: true });
        parent.addEventListener('touchmove', handleTouchUpdate, { passive: true });
        parent.addEventListener('touchend', handleTouchEnd);
        parent.addEventListener('touchcancel', handleTouchEnd);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            parent.removeEventListener('mousemove', handleMouseMove);
            parent.removeEventListener('mouseout', handleMouseOut);
            parent.removeEventListener('touchstart', handleTouchUpdate);
            parent.removeEventListener('touchmove', handleTouchUpdate);
            parent.removeEventListener('touchend', handleTouchEnd);
            parent.removeEventListener('touchcancel', handleTouchEnd);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default InteractiveBackground;