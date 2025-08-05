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
      code:'https://github.com/ahmedboughdiri-it/Application_web_modulaire_de_Gestion_de_Projet_de-_Construction'
    },
    { 
      title: 'Review Scraper Emotion Detector',
      year:2024,
      description: 'Developed a sophisticated review analysis platform that scrapes user feedback from multiple sources and leverages a multi-class emotion detection model to classify sentiments in real time. Utilizing Selenium and BeautifulSoup for dynamic data extraction, combined with Scikit-learn for advanced machine learning, the system identifies nuanced emotional responses within reviews. Additionally, it extracts critical negative sentiment drivers, providing actionable insights to guide product enhancements and improve customer satisfaction. The platform features an interactive Streamlit interface for seamless user experience and data visualization.',
      tags: ['Python', 'Stramlit', 'MongoDB', 'Stripe'],
      image: 'assets/emotion.png',
        screenshots:['assets/review.png','assets/app.png','assets/link (1).png','assets/result (1).png',],
      demo:'',
      code:'https://github.com/ahmedboughdiri-it/Review-Scraper-Emotion-Detector'
    },
    {
      title: 'PowerFit — Smart Gym Management System',
      year:2024,
      description: 'PowerFit is a full-featured smart gym web and desktop application developed to streamline gym operations and enhance the fitness experience for both clients and administrators. The backend is powered by Symfony, ensuring robust RESTful services and secure data handling, while the frontend desktop client is built using JavaFX for smooth and responsive user interactions. The platform is designed to manage memberships, track workout sessions, monitor progress, schedule coaching sessions, and handle payments — all in one integrated ecosystem.',
      tags: ['Symfony', 'JavaFX','MySQL',],
      image: 'assets/powerfit.png',
      screenshots:['assets/power5.png','assets/power1.png','assets/power2.png','assets/power3.png','assets/power4.png','assets/power6.png',],
      demo:'',
      code:'https://github.com/ahmedboughdiri-it/powerfit/tree/main'
    },
    {
      title: 'Smart Court Modular Application for Legal Management',
      year:2022,
      description: 'SmartCourt is a modular app for managing legal cases. It helps law firms, courts, and legal teams track cases, handle documents, schedule hearings, and communicate efficiently. It’s flexible and adapts to specific needs.',
      tags: ['C', 'QT', 'C++','MySQL','Arduino'],
      image: 'assets/smartcourt.png',
      screenshots:['assets/smartcourt.jpg','assets/smartcourt1.png',],
      demo:'https://youtu.be/VOeCVGgYI2U',
      code:'https://github.com/NadaLouhichi/Smart_Court_2A38'
    },
    {
      title: 'Mental Health Platform | MEDILAB+',
      year:2023,
      description: 'Medilab+ is a modern, user-friendly mental health web application designed to provide accessible resources, support, and tools for mental wellness. Built using PHP, JavaScript, and HTML, this platform offers personalized features such as self-assessment, educational content, and interactive sessions to empower users on their mental health journey.',
      tags: ['JavaScript', 'Php', 'HTML'],
      image: 'assets/medilab.png',
      screenshots:['assets/medilab (1).png','assets/medilab (2).png'],
      demo:'',
      code:'https://github.com/ahmedboughdiri-it/mental-health-platform'
    },
    {
      title: 'CARTHAGO CURSE',
      year:2022,
      description: 'Designed and developed a 2D educational game that brings the rich history and legends of Carthage to life. Built entirely in C using the SDL library, the game features immersive pixel art, custom-designed levels, and interactive mechanics that engage players in exploring Carthaginian culture. The project combines storytelling with smooth gameplay and dynamic audiovisual elements, offering a unique blend of entertainment and historical education.',
      tags: ['C', 'SDL', 'LINUX', 'ARDUINO'],
      image: 'assets/carthago.jpg',
       screenshots: ['assets/carthago.jpg', 'assets/menu.png', 'assets/fight.png','assets/map.png','assets/cart.png'],
      demo:'',
      code:'https://github.com/malekmiri/Projet-Jeu'
    }
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