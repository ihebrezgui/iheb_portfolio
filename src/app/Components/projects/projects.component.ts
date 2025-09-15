import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Smart Project Contstruction Platform',
      year:2025,
      description: 'Construction is an advanced digital platform designed to streamline and optimize every aspect of construction project management. Built using a microservices architecture, the solution ensures flexibility, scalability, and high availability across its modular services. Developed as part of our academic journey at ESPRIT – École Supérieure Privée d Ingénierie et de Technologies, this platform reflects months of hands-on learning, collaboration, and engineering best practices.',
      tags: ['SpringBoot', 'Angular', 'MySQL', 'Flask','Python'],
      image: 'assets/build.png',
       screenshots:['assets/1.png','assets/2.png','assets/3.png','assets/4.png','assets/screen5.jpg','assets/screen4.jpg','assets/screen3.jpg','assets/screen2.jpg','assets/screen1.jpg',],
       demo:'https://www.youtube.com/watch?v=HkjN8jzlEyk',
      code :'https://github.com/ihebrezgui/Application_web_modulaire_de_Gestion_de_Projet_de-_Construction'
    },
   
   
   

  ];

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.section-title', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 70%'
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power1.out'
    });
  }
 selectedProject: any = null;
 currentScreenshotIndex = 0;

openModal(project: any) {
  this.selectedProject = project;
  this.currentScreenshotIndex = 0; // reset to first screenshot
}

closeModal() {
  this.selectedProject = null;
}

nextScreenshot() {
  if (this.selectedProject?.screenshots?.length) {
    this.currentScreenshotIndex = (this.currentScreenshotIndex + 1) % this.selectedProject.screenshots.length;
  }
}

prevScreenshot() {
  if (this.selectedProject?.screenshots?.length) {
    this.currentScreenshotIndex =
      (this.currentScreenshotIndex - 1 + this.selectedProject.screenshots.length) % this.selectedProject.screenshots.length;
  }
}

}