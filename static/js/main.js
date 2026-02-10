// Advanced AI Portfolio JavaScript - Enhanced Version
class AIPortfolio {
    constructor() {
        this.isInitialized = false;
        this.init();
        this.setupAIEffects();
    }

    init() {
        this.setupPreloader();
        this.setupNavigation();
        this.setupCustomCursor();
        this.setupMatrixBackground();
        this.setupParticleSystem();
        this.setupScrollAnimations();
        this.setup3DEffects();
        this.setupAIHologram();
        this.setupSkillsMatrix();
        this.setupContactForm();
        this.setupAIAssistant();
        this.setupCounters();
        this.setupTimelineAnimations();
        this.isInitialized = true;
    }

    setupPreloader() {
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            if (!preloader) return;

            const messages = [
                'Initializing Neural Networks...',
                'Loading AI Models...',
                'Calibrating Quantum Processors...',
                'Portfolio Ready!'
            ];
            
            let messageIndex = 0;
            const loadingText = document.querySelector('.typing-effect');
            
            const updateMessage = () => {
                if (loadingText) {
                    if (messageIndex < messages.length - 1) {
                        loadingText.textContent = messages[messageIndex];
                        messageIndex++;
                        setTimeout(updateMessage, 500);
                    } else {
                        loadingText.textContent = messages[messageIndex];
                        setTimeout(() => {
                            preloader.classList.add('fade-out');
                            setTimeout(() => {
                                preloader.style.display = 'none';
                                document.body.classList.remove('loading');
                            }, 500);
                        }, 800);
                    }
                }
            };
            
            setTimeout(updateMessage, 1000);
        });
    }

    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (!navbar) return;

        // Navbar scroll effect with AI glow
        let ticking = false;
        const updateNavbar = () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                navbar.style.background = 'rgba(0, 0, 17, 0.95)';
                navbar.style.boxShadow = '0 5px 30px rgba(0, 255, 255, 0.2)';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.background = 'rgba(0, 0, 17, 0.9)';
                navbar.style.boxShadow = 'none';
            }
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        });

        // Mobile menu toggle
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
        }

        // Smooth scrolling with AI trail effect
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    this.createScrollTrail();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupCustomCursor() {
        // Only setup on desktop
        if (window.innerWidth <= 768) return;

        let cursor = document.getElementById('custom-cursor');
        if (!cursor) {
            cursor = document.createElement('div');
            cursor.id = 'custom-cursor';
            cursor.innerHTML = `
                <div class="cursor-dot"></div>
                <div class="cursor-ring"></div>
            `;
            document.body.appendChild(cursor);
        }

        const cursorDot = cursor.querySelector('.cursor-dot');
        const cursorRing = cursor.querySelector('.cursor-ring');
        
        if (!cursorDot || !cursorRing) return;

        let mouseX = 0, mouseY = 0;
        let dotX = 0, dotY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const updateCursor = () => {
            // Smooth cursor following
            dotX += (mouseX - dotX) * 0.8;
            dotY += (mouseY - dotY) * 0.8;
            ringX += (mouseX - ringX) * 0.3;
            ringY += (mouseY - ringY) * 0.3;

            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;

            requestAnimationFrame(updateCursor);
        };
        updateCursor();

        // Cursor interactions
        document.querySelectorAll('a, button, .clickable, .project-card, .skill-category-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.transform += ' scale(2)';
                cursorRing.style.borderColor = '#00ff88';
                cursorDot.style.backgroundColor = '#00ff88';
                cursor.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursorRing.style.transform = cursorRing.style.transform.replace(' scale(2)', '');
                cursorRing.style.borderColor = '#00ffff';
                cursorDot.style.backgroundColor = '#00ffff';
                cursor.classList.remove('hover');
            });
        });
    }

    setupMatrixBackground() {
        let matrixContainer = document.getElementById('matrix-bg');
        if (!matrixContainer) {
            matrixContainer = document.createElement('div');
            matrixContainer.id = 'matrix-bg';
            matrixContainer.className = 'matrix-background';
            document.body.appendChild(matrixContainer);
        }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        matrixContainer.appendChild(canvas);

        const aiCharacters = "AIDEEPMACHINELEARNINGNEURALNETWORKQUANTUM01";
        const characters = aiCharacters.split("");
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(0, 0, 17, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ffff';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const matrixInterval = setInterval(drawMatrix, 35);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Store interval for cleanup if needed
        this.matrixInterval = matrixInterval;
    }

    setupParticleSystem() {
        let particleContainer = document.getElementById('particles-container');
        if (!particleContainer) {
            particleContainer = document.createElement('div');
            particleContainer.id = 'particles-container';
            particleContainer.className = 'particles-container';
            document.body.appendChild(particleContainer);
        }

        const particles = [];
        const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));

        class AIParticle {
            constructor() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 2;
                this.speedY = (Math.random() - 0.5) * 2;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = ['#00ffff', '#00ff88', '#cc00ff'][Math.floor(Math.random() * 3)];
                
                this.element = document.createElement('div');
                this.element.className = 'ai-particle';
                this.element.style.cssText = `
                    position: fixed;
                    width: ${this.size}px;
                    height: ${this.size}px;
                    background: ${this.color};
                    border-radius: 50%;
                    opacity: ${this.opacity};
                    pointer-events: none;
                    box-shadow: 0 0 10px ${this.color};
                    z-index: -1;
                `;
                particleContainer.appendChild(this.element);
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1;
                if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1;

                this.element.style.left = this.x + 'px';
                this.element.style.top = this.y + 'px';
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new AIParticle());
        }

        const animateParticles = () => {
            particles.forEach(particle => particle.update());
            requestAnimationFrame(animateParticles);
        };
        animateParticles();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '-50px'
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed', 'animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for scroll animation
        document.querySelectorAll('.scroll-reveal, .section-header, .about-stats .stat-item, .skill-category-card, .timeline-item').forEach(el => {
            el.classList.add('scroll-reveal');
            scrollObserver.observe(el);
        });
    }

    setup3DEffects() {
        document.querySelectorAll('.project-card, .skill-category-card, .stat-item').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(10px)
                    scale(1.02)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
            });
        });
    }

    setupAIHologram() {
        const hologram = document.querySelector('.ai-hologram, .ai-avatar-placeholder');
        if (!hologram) return;

        const dataStreams = document.querySelectorAll('.stream');
        
        dataStreams.forEach((stream, index) => {
            stream.style.animationDelay = `${index * 0.5}s`;
        });

        // Interactive hologram rotation
        hologram.addEventListener('mousemove', (e) => {
            const rect = hologram.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            const rotateX = y * 20;
            const rotateY = x * 20;
            
            hologram.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
            `;
        });

        hologram.addEventListener('mouseleave', () => {
            hologram.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    }

    setupSkillsMatrix() {
        const skillNodes = document.querySelectorAll('.skill-item, .skill-category-card');
        
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-50px'
        };

        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.querySelector('.skill-progress');
                    if (progress) {
                        const percentage = progress.dataset.percentage;
                        setTimeout(() => {
                            progress.style.width = percentage + '%';
                        }, Math.random() * 500);
                    }

                    // Add neural connection effects
                    this.createNeuralConnections(entry.target);
                }
            });
        }, observerOptions);

        skillNodes.forEach(node => {
            skillObserver.observe(node);
        });
    }

    setupCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.textContent.replace(/\D/g, ''));
                    let current = 0;
                    const increment = target / 60;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
                            setTimeout(updateCounter, 30);
                        } else {
                            counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                        }
                    };
                    
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    setupTimelineAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 200);
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }

    createNeuralConnections(skillNode) {
        const connections = document.createElement('div');
        connections.className = 'neural-connections';
        connections.innerHTML = `
            <svg class="connection-svg" viewBox="0 0 100 100" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
                <path d="M10,50 Q30,10 50,50 T90,50" stroke="#00ffff" stroke-width="1" fill="none" opacity="0.6"/>
                <path d="M50,10 Q70,30 50,50 Q30,70 50,90" stroke="#00ff88" stroke-width="1" fill="none" opacity="0.4"/>
            </svg>
        `;
        skillNode.style.position = 'relative';
        skillNode.appendChild(connections);

        setTimeout(() => {
            if (connections.parentNode) {
                connections.remove();
            }
        }, 3000);
    }

    setupContactForm() {
        const contactForm = document.getElementById('contact-form') || document.querySelector('.contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]') || contactForm.querySelector('.btn');
            if (!submitBtn) return;
            
            const originalText = submitBtn.innerHTML;
            
            // AI Loading animation
            submitBtn.innerHTML = `
                <div class="ai-loading">
                    <i class="fas fa-brain"></i>
                    <span>Processing with AI...</span>
                </div>
            `;
            submitBtn.disabled = true;

            try {
                // Simulate form processing
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                this.showAINotification('Thank you! Your message has been received. I\'ll get back to you soon!', 'success');
                contactForm.reset();
                this.createSuccessEffect();
            } catch (error) {
                this.showAINotification('Connection error. Please try again.', 'error');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    setupAIAssistant() {
        // AI Assistant toggle functionality
        const aiAssistantBtn = document.getElementById('ai-assistant-toggle');
        if (aiAssistantBtn) {
            aiAssistantBtn.addEventListener('click', () => {
                this.showAINotification('AI Assistant feature coming soon! 🤖', 'info');
            });
        }
    }

    showAINotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `ai-notification ai-${type}`;
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">AI Assistant</div>
                <div class="notification-message">${message}</div>
            </div>
            <div class="notification-close">
                <i class="fas fa-times"></i>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 100);
        
        const removeNotification = () => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        };

        setTimeout(removeNotification, 5000);

        notification.querySelector('.notification-close').addEventListener('click', removeNotification);
    }

    setupAIEffects() {
        // Glitch effect for AI text
        document.querySelectorAll('.glitch-text, .ai-text').forEach(el => {
            setInterval(() => {
                if (Math.random() < 0.1) {
                    el.classList.add('glitching');
                    setTimeout(() => el.classList.remove('glitching'), 200);
                }
            }, 2000);
        });

        // AI scanning effect
        this.createAIScanlines();
        
        // Neural network background
        this.animateNeuralNetwork();
    }

    createAIScanlines() {
        const scanlines = document.createElement('div');
        scanlines.className = 'ai-scanlines';
        scanlines.innerHTML = `
            <div class="scanline scanline-1"></div>
            <div class="scanline scanline-2"></div>
            <div class="scanline scanline-3"></div>
        `;
        scanlines.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
            mix-blend-mode: screen;
        `;
        document.body.appendChild(scanlines);
    }

    animateNeuralNetwork() {
        const networkContainer = document.createElement('div');
        networkContainer.className = 'neural-network-bg';
        networkContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -2;
            opacity: 0.3;
        `;
        document.body.appendChild(networkContainer);

        // Create animated neural connections
        for (let i = 0; i < 10; i++) {
            const connection = document.createElement('div');
            connection.className = 'neural-connection';
            connection.style.cssText = `
                position: absolute;
                width: ${Math.random() * 200 + 100}px;
                height: 2px;
                background: linear-gradient(90deg, transparent, #00ffff, transparent);
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.1};
                animation: neural-pulse ${Math.random() * 3 + 2}s infinite;
            `;
            networkContainer.appendChild(connection);
        }
    }

    // Utility methods
    createScrollTrail() {
        const trail = document.createElement('div');
        trail.className = 'scroll-trail';
        trail.style.cssText = `
            position: fixed;
            width: 4px;
            height: 100px;
            background: linear-gradient(to bottom, transparent, #00ffff, transparent);
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 1000;
            animation: trail-fade 1s ease-out forwards;
        `;
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.remove();
            }
        }, 1000);
    }

    createSuccessEffect() {
        // Create AI success particle burst
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'success-particle';
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #00ff88;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: 50%;
                top: 50%;
                animation: success-burst 1s ease-out forwards;
                animation-delay: ${i * 0.05}s;
            `;
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 1000);
        }
    }
}

// Initialize AI Portfolio
document.addEventListener('DOMContentLoaded', () => {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Initialize portfolio
    window.aiPortfolio = new AIPortfolio();
    
    // Add required CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes neural-pulse {
            0%, 100% { opacity: 0.1; transform: translateX(0); }
            50% { opacity: 0.5; transform: translateX(20px); }
        }
        
        @keyframes success-burst {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0); opacity: 0; }
        }
        
        @keyframes trail-fade {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
        }
        
        .scroll-reveal {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        .scroll-reveal.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .glitching {
            animation: glitch 0.2s ease-in-out;
        }
        
        @keyframes glitch {
            0% { transform: translateX(0); }
            20% { transform: translateX(-2px); }
            40% { transform: translateX(2px); }
            60% { transform: translateX(-1px); }
            80% { transform: translateX(1px); }
            100% { transform: translateX(0); }
        }
        
        .ai-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 17, 34, 0.95);
            border: 2px solid #00ffff;
            border-radius: 12px;
            padding: 1rem;
            max-width: 300px;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .ai-notification.show {
            transform: translateX(0);
        }
        
        .ai-notification.ai-success { border-color: #00ff88; }
        .ai-notification.ai-error { border-color: #ff4444; }
        .ai-notification.ai-info { border-color: #0099ff; }
        
        .custom-cursor {
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
        }
        
        .cursor-dot {
            width: 8px;
            height: 8px;
            background: #00ffff;
            border-radius: 50%;
            position: absolute;
            top: -4px;
            left: -4px;
        }
        
        .cursor-ring {
            width: 30px;
            height: 30px;
            border: 2px solid #00ffff;
            border-radius: 50%;
            position: absolute;
            top: -15px;
            left: -15px;
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});
document.addEventListener('DOMContentLoaded', () => {
    // === Portfolio effects
    document.body.classList.add('loading');
    window.aiPortfolio = new AIPortfolio();

    // === Chatbot logic
    const fab = document.getElementById('chatbot-fab');
    const widget = document.getElementById('ai-chatbot-widget');
    const closeBtn = document.getElementById('chatbot-close');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');
    const hints = document.querySelectorAll('#chatbot-hints .hint');

    // Show/hide chatbot
    function openWidget() {
        widget.classList.remove('chatbot-closed');
        setTimeout(()=>widget.classList.remove('chatbot-hidden'),30);
        input.focus();
    }
    function closeWidget() {
        widget.classList.add('chatbot-hidden');
        setTimeout(()=>widget.classList.add('chatbot-closed'),450);
    }
    if (fab) fab.addEventListener('click', openWidget);
    if (closeBtn) closeBtn.addEventListener('click', closeWidget);

    // Hints = autofill
    if (hints) hints.forEach(h=>h.addEventListener('click',()=>{input.value=h.dataset.text;input.focus();}));

    // DATA: Portfolio/CV/FAQ
    const cvURL = "/static/cv/muhammad_ahmed_cv.pdf";
    const portfolioProjects = [
        {
            title: "True & Fake News Prediction",
            desc: "AI/ML model for classifying news veracity using NLP and scikit-learn.",
            link: "/projects/projects/true-and-fake-news-prediction/",
            tag: "AI / NLP"
        },{
            title: "Custom Language Interpreter",
            desc: "A programming language, parser, and interpreter built from scratch.",
            link: "/projects/projects/custom-language-interpreter/",
            tag: "Compiler / Python"
        },{
            title: "AI Portfolio Site",
            desc: "An interactive Django & JS portfolio with 3D, animation, and chatbot features.",
            link: "/",
            tag: "Web / UI"
        }
    ];
    const faqs = [
        {
            q: /\b(bio|about|summary|yourself|intro|who|background|experience)\b/i,
            a: `👨‍💻 <b>Muhammad Ahmed Naeem</b>: AI Developer & Machine Learning Engineer.<br>
            - Specialized in advanced AI/ML, NLP, Python backends.<br>
            - Built production-ready models, custom language tools, interactive web systems.<br>
            - Passion: Solving tough technical problems with creativity and rigor.<br>
            <br>Need my <b>full resume</b> or <b>skills summary</b>?`
        },{
            q: /\b(resume|cv|curriculum|download)\b/i,
            a: () => `📄 <b>Download My CV:</b> <a href="${cvURL}" target="_blank">Resume PDF</a>
                <br>Want a <b>skills summary</b> or see my project history?`
        },{
            q: /\b(project|portfolio|work|built|demo)\b/i,
            a: () => `<b>Featured Projects:</b><br>` +
                portfolioProjects.map(p=>`
                <div class="chatbot-project-card">
                    <a href="${p.link}"><b>${p.title}</b></a><br>
                    <span>${p.desc}</span>
                    <div class="tag">${p.tag}</div>
                </div>`).join('<hr style="border:0;height:1px;background:#12f3;border-radius:2px;">')
                +`<br>Ask about any project for details!`
        },{
            q: /\b(stack|skill|tech|tools|expertise|technology)\b/i,
            a: `🛠️ <b>Tech Stack:</b><br>
                • Python, Django, Flask<br>
                • Data Science, Pandas, NumPy, Scikit-learn<br>
                • ML/AI: TensorFlow, PyTorch, Transformers, OpenCV<br>
                • Web: HTML5, JS (ES6+), CSS, 3D UI<br>
                • <i>Ask for a skill and I can elaborate further.</i>`
        },{
            q: /\b(contact|email|reach|connect|linkedin)\b/i,
            a: `📧 <b>Contact:</b> Use the Contact form on the site for a direct reply, or message me on <a href="https://www.linkedin.com/in/ahmed-naeem-8a4a702b8" target="_blank">LinkedIn</a>. Always happy to network or discuss opportunities!`
        },{
            q: /\b(download|file|pdf|copy|resume|cv)\b/i,
            a: () => `You can <a href="${cvURL}" target="_blank">download my full CV here</a>.<br>
                Or ask for a summary, education details, or project experience.`
        }
    ];
    
    // Chatbot helpers
    function sanitize(str) {
        const el = document.createElement("div");
        el.textContent = str;
        return el.innerHTML;
    }
    function fallbackReply() {
        return `
        🤖 Sorry, I didn't get that.<br>
        <b>Try asking about:</b>
        <ul>
            <li>My bio / background</li>
            <li>My projects / portfolio</li>
            <li>My skills / tech stack</li>
            <li>Request <a href="${cvURL}" target="_blank">Download CV</a></li>
            <li>Or simply type 'contact'</li>
        </ul>
        <div style="margin-top:7px;font-size:0.97em;color:#00ffd0ee;">
        You can also click a quick hint below for instant answers!
        </div>
        `
    }
    function addMessage(text, isUser = false) {
        const d = document.createElement("div");
        d.className = isUser ? "user-message" : "ai-message";
        d.innerHTML = `<div class="bubble">${text.replace(/\n/g, "<br>")}</div>`;
        messages.appendChild(d);
        messages.scrollTop = messages.scrollHeight;
    }
    function botReply(question) {
        for(const {q,a} of faqs) {
            if (q.test(question)) {
                if(typeof a === "function") return a();
                return a;
            }
        }
        const projectMatch = portfolioProjects.find(
            p => question.toLowerCase().includes(p.title.toLowerCase().split(" ")[0])
        );
        if (projectMatch)
            return `<b>${projectMatch.title}</b>:<br>${projectMatch.desc}<br>
                <a href="${projectMatch.link}">View Project Details</a>`;
        return fallbackReply(question);
    }
    // Greet
    setTimeout(() => {
        addMessage("👋 I'm your portfolio AI – ask about my <b>resume</b>, <b>bio</b>, <b>projects</b>, <b>skills</b>, or <b>contact info</b>. <br>Try the quick hints!", false);
    }, 800);
    if (form) form.addEventListener('submit', function (e) {
        e.preventDefault();
        const value = input.value.trim();
        if (!value) return;
        addMessage(sanitize(value), true);
        input.value = '';
        setTimeout(() => {
            addMessage(botReply(value));
        }, 600);
    });
    if (input) input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });

    // === PORTFOLIO CHATBOT AUTO-NOTIFICATION ===
    let notif = document.getElementById('portfolio-chatbot-notification');
    if(!notif) {
        notif = document.createElement('div');
        notif.id = 'portfolio-chatbot-notification';
        document.body.appendChild(notif);
    }
    notif.innerHTML = `<span class="notif-icon"><i class="fas fa-robot"></i></span>
      <span>💬 Ask me about my projects, CV, or AI experience!</span>`;
    setTimeout(()=> {
        notif.style.display = "flex";
        notif.classList.add('show');
    }, 1800);
    notif.onclick = function() {
        notif.classList.remove('show');
        setTimeout(()=> notif.style.display="none",300);
        if(widget) openWidget();
    }
    setTimeout(()=> {
        notif.classList.remove('show');
        setTimeout(()=> notif.style.display="none",350);
    }, 8200);
});
window.AIPortfolio = AIPortfolio;
