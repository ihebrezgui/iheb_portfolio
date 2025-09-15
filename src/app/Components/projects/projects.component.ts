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
   
   {
  title: 'Smart Exam Monitoring Platform',
  year: 2025,
  description: 'Smart Exam Monitoring Platform is an advanced digital solution designed to modernize and secure the entire exam supervision process within academic institutions. Built on a microservices architecture with Eureka service discovery and Spring Cloud Gateway, the platform ensures scalability, modularity, and seamless communication between services. It provides role-based management for Super Admin, Admin, and Teachers, ensuring clear separation of responsibilities. Super Admins can fully manage user accounts (create, modify, delete), while Admins have restricted rights focused on viewing and coordinating operations. Teachers can declare frauds, consult their schedules, and receive real-time notifications when assigned to exam supervision. The platform also integrates modules for classroom management, session planning, module assignment, and fraud tracking, offering transparency, flexibility, and efficiency. Developed at ESPRIT – École Supérieure Privée d’Ingénierie et de Technologies, this project highlights practical application of modern software engineering practices, microservices, and cloud-native design.',
  tags: ['SpringBoot', 'Angular', 'MySQL', 'Docker', 'Microservices', 'Eureka', 'Spring Cloud Gateway'],
  image: 'assets/espritstage.png',
  screenshots: [
    'assets/plan.png',
    'assets/roles.png',
    'assets/fraude.png',
    'assets/notification.png',
    'assets/dashboard.png'
  ],
  code: 'https://github.com/ihebrezgui/Platforme_MicroService_Surveillances.git'
},

   {
  title: 'Smart Quiz Mobile App',
  year: 2024,
  description: 'Smart Quiz Mobile App is a cross-platform application designed to help students prepare effectively for standardized tests such as IELTS, TOEFL, SAT, and GRE. Built with React Native for a smooth mobile experience and powered by a Node.js backend, the app offers interactive quizzes, detailed score tracking, and personalized feedback. It supports multiple question formats (MCQs, True/False, and Fill-in-the-Blanks) and provides instant correction with explanations to strengthen learning. Users can practice by category (Listening, Reading, Writing, Speaking) or simulate real exam sessions under timed conditions. The platform also integrates user authentication, progress dashboards, and gamified elements to keep learners motivated. Developed as part of an academic project, this app demonstrates the application of modern mobile development, backend integration, and educational technology.',
  tags: ['Node.js', 'React Native', 'MongoDB', 'Express', 'Quiz App', 'IELTS', 'TOEFL', 'SAT', 'GRE'],
  image: 'assets/quizz0.png',
  screenshots: [
    
    'assets/quizz2.png',
    'assets/quizz3.png',
    'assets/quizz4.png',
    'assets/quiz1.png',
    
  ],

  code: 'https://github.com/ihebrezgui/MobileAppQuizz.git'
},

{
  title: 'Spring Boot Authentication System',
  year: 2023,
  description: 'Spring Boot Authentication System is a secure backend solution designed to manage user registration, login, and role-based access control for modern applications. Built with Spring Boot and Spring Security, the system provides JWT (JSON Web Token) authentication to ensure stateless and scalable session management. It supports role-based authorization (Admin, User), password encryption with BCrypt, and secure RESTful API endpoints. The project integrates seamlessly with a relational database (MySQL/PostgreSQL) for persistent user data storage and includes Swagger documentation for API testing. Developed as part of an academic project, this backend demonstrates the application of microservice principles, security best practices, and enterprise-level authentication.',
  tags: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'REST API', 'Authentication', 'Authorization'],
  image: 'assets/login.png',
  screenshots: [
    'assets/login.png',
  
  ],
  code: 'https://github.com/ihebrezgui/User_BackEnd_SpringBoot.git'
} ,

{
  title: 'QoS Monitoring Web Application',
  year: 2023,
  description: 'QoS Monitoring Web Application is a web-based platform designed to automate and optimize the monitoring of Quality of Service (QoS) using OSS (Operations Support System) counters from mobile network operators. Built with Angular for the frontend and Spring Boot for the backend, the application enables continuous collection and visualization of QoS performance metrics. The collected data is stored in a relational database for advanced analysis and reporting. The platform provides interactive dashboards, graphical performance charts, and historical data tracking to assist technicians in identifying issues quickly, reducing operational costs, and improving overall QoS. Additional features include technician management, customizable reports, and data-driven insights. Developed following agile methodology, the project emphasizes iterative development and testing to ensure robustness, scalability, and usability for telecom operators.',
  tags: ['Angular', 'Spring Boot', 'QoS Monitoring', 'OSS Counters', 'Relational Database', 'Dashboard', 'Agile'],
  image: 'assets/image.png',
  screenshots: [
    'assets/qos1.jpg',
    'assets/qos2.jpg',
    'assets/qos3.jpg',
    'assets/qos4.jpg',
    'assets/qos5.jpg',
    'assets/qos6.jpg',
    'assets/qos7.jpg'
  ],
  code: 'https://github.com/ihebrezgui/backend-eagleyes.git'
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