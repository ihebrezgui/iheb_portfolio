import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  allSkills: any[] = [];

  programmingLanguages = [
    { name: 'Java', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C#', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'C/C++', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'PHP', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Arduino', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    { name: 'JavaScript', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'SQL', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
  ];

  frameworks = [
    { name: 'Angular', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'React Native', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Flutter', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'JavaFX', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Spring Cloud Gateway', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Eureka', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Node.js', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Symfony', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
    { name: 'Flask', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: '.NET', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'Odoo', level: 75, logo: 'https://www.odoo.com/web/image/website/1/logo/Odoo' }, // URL à vérifier
    { name: 'Streamlit', level: 60, logo: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
    { name: 'Qt', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg' }
  ];

  databases = [
    { name: 'MySQL', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'SQLite', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
  ];

  devops = [
    { name: 'Docker', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', level: 55, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Jenkins', level: 60, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'Prometheus', level: 55, logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg' }, // URL à vérifier
    { name: 'Grafana', level: 55, logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_logo.svg' } // URL à vérifier
  ];

  tools = [
    { name: 'Git', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Linux', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Maven', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
    { name: 'Postman', level: 75, logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'VMware', level: 65, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/VMware_logo.svg' }, // URL à vérifier
    { name: 'VirtualBox', level: 65, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/virtualbox/virtualbox-original.svg' },
    { name: 'Power BI', level: 70, logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Power_BI_logo.svg' }, // URL à vérifier
    { name: 'SonarQube', level: 70, logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/SonarQube_logo.svg' }, // URL à vérifier
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
  private boundResize = this.onWindowResize.bind(this);

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.allSkills = [
      ...this.programmingLanguages,
      ...this.frameworks,
      ...this.databases,
      ...this.devops,
      ...this.tools
    ];
  }

  ngAfterViewInit() {
    this.initThreeJS();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.boundResize);
    this.controls?.dispose();
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.domElement.remove();
    }
  }

  private initThreeJS() {
    const container: HTMLElement = this.el.nativeElement.querySelector('#skill-sphere');

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
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    // Lights
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    this.scene.add(pointLight);

    // Sphère filaire
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(8, 32, 32),
      new THREE.MeshPhongMaterial({
        color: 0x00a8ff,
        transparent: true,
        opacity: 0.2,
        wireframe: true
      })
    );
    this.scene.add(sphere);

    // Groupe des icônes : tourne avec la sphère
    const skillGroup = new THREE.Group();
    this.scene.add(skillGroup);

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');

    // Répartition uniforme sur la sphère (spirale dorée)
    const total = this.allSkills.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    this.allSkills.forEach((skill, i) => {
      const y = total > 1 ? 1 - (i / (total - 1)) * 2 : 0;
      const r = Math.sqrt(1 - y * y);
      const theta = i * goldenAngle;
      const position = new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(9);

      // Badge avec le nom, affiché tant que le logo n'est pas chargé
      const material = new THREE.SpriteMaterial({
        map: this.createLabelTexture(skill.name),
        transparent: true
      });
      const sprite = new THREE.Sprite(material);
      sprite.position.copy(position);
      sprite.scale.set(2, 2, 2);
      sprite.userData = skill;
      skillGroup.add(sprite);

      // Remplace le badge par le logo ; en cas d'échec, le badge reste visible
      loader.load(
        skill.logo,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          material.map = texture;
          material.needsUpdate = true;
        },
        undefined,
        () => console.warn(`Logo introuvable pour ${skill.name} : ${skill.logo}`)
      );
    });

    // Contrôles
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.5;

    // Animation
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      this.controls.update();
      sphere.rotation.y += 0.002;
      skillGroup.rotation.y += 0.002;
      this.renderer.render(this.scene, this.camera);
    };
    animate();

    window.addEventListener('resize', this.boundResize);
  }

  private createLabelTexture(name: string): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = 'rgba(0, 168, 255, 0.85)';
    ctx.beginPath();
    ctx.arc(64, 64, 60, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const label = name.length > 8 ? name.slice(0, 7) + '…' : name;
    ctx.fillText(label, 64, 64);

    return new THREE.CanvasTexture(canvas);
  }

  private onWindowResize() {
    const container: HTMLElement = this.el.nativeElement.querySelector('#skill-sphere');
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }
}