import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      position: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      type: 'Full-time',
      description: 'Lead the development of enterprise-level web applications using Angular and React. Implemented micro-frontend architecture that improved performance by 40%.',
      skills: ['Angular', 'React', 'TypeScript', 'RxJS', 'NgRx']
    },
    {
      position: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2018 - 2021',
      type: 'Full-time',
      description: 'Developed responsive web applications and collaborated with UX designers to implement pixel-perfect interfaces. Mentored junior developers.',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap']
    },
    {
      position: 'Web Development Intern',
      company: 'StartUp Ventures',
      period: 'Summer 2017',
      type: 'Internship',
      description: 'Assisted in building company website and internal tools. Gained experience with modern web development workflows.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git']
    }
  ];

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.section-title, .section-subtitle', {
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top 80%'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%'
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.2)'
    });
  }
}