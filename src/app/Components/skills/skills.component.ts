import { Component, OnInit, ElementRef, AfterViewInit,OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit,OnDestroy {
  // Combined skills array
  allSkills: any[] = [];

  // Original skill categories
  programmingLanguages = [
    { name: 'Java', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C/C++', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'PHP', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Arduino', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    { name: 'JavaScript', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'SQL', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
  ];

  frameworks = [
    { name: 'Angular', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'JavaFX', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Symfony', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
    { name: 'Flask', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: '.NET', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'Streamlit', level: 60, logo: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
    { name: 'Qt', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg' }
  ];

  tools = [
    { name: 'Git', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Postman', level: 75, logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Docker', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Visual Studio', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
    { name: 'VS Code', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'IntelliJ', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
    { name: 'Spring Cloud', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' }
  ];

 private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private animationId!: number;
  private particles!: THREE.Points;
  private pulseEffect!: THREE.Mesh;
  private hoveredSkill: THREE.Object3D | null = null;


  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.allSkills = [...this.programmingLanguages, ...this.frameworks, ...this.tools];
  }

  ngAfterViewInit() {
    this.initThreeJS();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.onWindowResize);
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initThreeJS() {
    const container = this.el.nativeElement.querySelector('#skill-sphere');
    
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = null;
    
    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 15;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    this.scene.add(pointLight);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(8, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x00a8ff,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.scene.add(sphere);

    // Skill Icons - now properly typed as THREE.Sprite[]
    const icons: THREE.Sprite[] = [];
    const textureLoader = new THREE.TextureLoader();
    
    this.allSkills.forEach((skill, i) => {
      textureLoader.load(skill.logo, (texture) => {
        const material = new THREE.SpriteMaterial({ 
          map: texture,
          transparent: true
        });
        const icon = new THREE.Sprite(material);
        
        // Position on sphere surface
        const phi = Math.acos(-1 + (2 * i) / this.allSkills.length);
        const theta = Math.sqrt(this.allSkills.length * Math.PI) * phi;
        
        icon.position.setFromSphericalCoords(
          8.5, // radius slightly larger than sphere
          phi,
          theta
        );
        
        icon.scale.set(1.5, 1.5, 1.5);
        icon.userData = skill;
        this.scene.add(icon);
        icons.push(icon); // Now correctly typed
      });
    });

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.5;

    // Animation
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      this.controls.update();
      sphere.rotation.y += 0.002;
      this.renderer.render(this.scene, this.camera);
    };
    animate();

    // Resize handler
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }


  
  private onWindowResize() {
    const container = this.el.nativeElement.querySelector('#skill-sphere');
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }
}