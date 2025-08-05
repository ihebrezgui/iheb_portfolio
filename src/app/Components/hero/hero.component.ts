import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import * as THREE from 'three';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('heroEntrance', [
      transition(':enter', [
        query('.hero-content', [
          style({ opacity: 0, transform: 'translateY(40px)' }),
          stagger(100, [
            animate('800ms cubic-bezier(0.35, 0.15, 0.2, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ]),
        query('.hero-orb', [
          style({ opacity: 0, transform: 'scale(0.5)' }),
          animate('1200ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', 
            style({ opacity: 1, transform: 'scale(1)' }))
        ])
      ])
    ]),
    trigger('scrollReveal', [
      transition('* => *', [
        query('.scroll-animate', [
          style({ opacity: 0, transform: 'translateY(60px)' }),
          stagger(150, [
            animate('600ms cubic-bezier(0.35, 0.15, 0.2, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('particleCanvas', { static: true }) particleCanvas!: ElementRef<HTMLCanvasElement>;
  
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private particles!: THREE.Points;
  private particleCount = 2000;
  
  roles = ['Computer Science Engineer', 'Full Stack Developer', 'Problem Solver'];
  currentRoleIndex = 0;
  isScrolling = false;
  scrollY = 0;
  
  ngOnInit(): void {
    this.init3DParticles();
    this.initTypingAnimation();
    this.initOrbAnimation();
  }
  
  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
    this.setupScrollAnimations();
  }
  
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrollY = window.scrollY;
    this.isScrolling = this.scrollY > 0;
    
    // Parallax effect for hero content
    const parallaxElements = document.querySelectorAll('.parallax-layer');
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed') || '0.2');
      const yPos = -(this.scrollY * speed);
      gsap.to(el, { y: yPos, duration: 0.1 });
    });
    
    // Particle density changes with scroll
    if (this.particles) {
      const density = 1 - Math.min(this.scrollY / 1000, 0.7);
      (this.particles.material as THREE.PointsMaterial).size = 0.05 * density;
    }
  }
  
  private setupIntersectionObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add specific animations based on element
          if (entry.target.classList.contains('hero-cta')) {
            this.animateCTA(entry.target);
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });
  }
  
  private setupScrollAnimations(): void {
    // Animate particles based on scroll
    window.addEventListener('scroll', () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      
      if (this.particles) {
        this.particles.rotation.y = scrollPercent * Math.PI * 2;
        this.particles.rotation.x = scrollPercent * Math.PI;
      }
    });
  }
  
  private animateCTA(element: Element): void {
    gsap.from(element, {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      y: 30,
      ease: "back.out(1.7)"
    });
    
    // Continuous subtle animation
    gsap.to(element, {
      duration: 2,
      y: "+=10",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  
  private init3DParticles(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    this.camera.position.z = 5;
    
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.particleCanvas.nativeElement,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    
    for (let i = 0; i < this.particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      colors[i * 3] = 0.1 + Math.random() * 0.4; // Blueish tint
      colors[i * 3 + 1] = 0.3 + Math.random() * 0.4;
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      
      sizes[i] = 0.05 + Math.random() * 0.1;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);
    
    // Enhanced animation loop with scroll interaction
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Base rotation
      this.particles.rotation.x += 0.001;
      this.particles.rotation.y += 0.002;
      
      // Interactive particle movement
      const positions = (this.particles.geometry.attributes['position'] as THREE.BufferAttribute).array;
      for (let i = 0; i < this.particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(Date.now() * 0.001 + i) * 0.001;
        
        // Add scroll effect
        if (this.isScrolling) {
          positions[i3] += (Math.random() - 0.5) * 0.02;
          positions[i3 + 2] += (Math.random() - 0.5) * 0.02;
        }
      }
      (this.particles.geometry.attributes['position'] as THREE.BufferAttribute).needsUpdate = true;
      
      this.renderer.render(this.scene, this.camera);
    };
    
    animate();
    
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
  
  private initTypingAnimation(): void {
    const typingElement = document.querySelector('.typing-text');
    const cursorElement = document.querySelector('.cursor');
    
    // Add animation to cursor
    gsap.to(cursorElement, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    
    const typeNext = () => {
      const currentRole = this.roles[this.currentRoleIndex];
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      
      gsap.to(typingElement, {
        duration: 1.5,
        text: currentRole,
        ease: 'power2.inOut',
        onComplete: () => {
          setTimeout(() => {
            gsap.to(typingElement, {
              duration: 0.8,
              text: '',
              ease: 'power2.in',
              onComplete: typeNext
            });
          }, 2000);
        }
      });
    };
    
    typeNext();
  }
  
  private initOrbAnimation(): void {
    const orb = document.querySelector('.hero-orb');
    if (!orb) return;
    
    // More complex orb animation
    gsap.to(orb, {
      duration: 8,
      x: '+=150',
      y: '+=80',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    gsap.to(orb, {
      duration: 12,
      rotation: 360,
      repeat: -1,
      ease: 'none',
      transformOrigin: 'center'
    });
    
    // Glow effect
    gsap.to(orb, {
      duration: 3,
      boxShadow: '0 0 30px 10px rgba(100, 150, 255, 0.6)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }



  
}