import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      period: '2016 - 2018',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on Neural Network Optimization.',
      gpa: '3.9/4.0',
      icon: 'fas fa-graduation-cap'
    },
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'State University',
      period: '2012 - 2016',
      description: 'Focus on Full Stack Development and Software Architecture. Minor in Mathematics.',
      gpa: '3.8/4.0',
      icon: 'fas fa-university'
    },
    {
      degree: 'AWS Certified Developer',
      institution: 'Amazon Web Services',
      period: '2020',
      description: 'Professional certification demonstrating expertise in developing on AWS.',
      certificateLink: '#',
      icon: 'fab fa-aws'
    },
    {
      degree: 'Angular Advanced Certification',
      institution: 'Google Developers',
      period: '2019',
      description: 'Advanced concepts including RxJS, State Management, and Performance Optimization.',
      certificateLink: '#',
      icon: 'fab fa-angular'
    }
  ];

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.section-title, .section-subtitle', {
      scrollTrigger: {
        trigger: '.education-section',
        start: 'top 80%'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.education-card', {
      scrollTrigger: {
        trigger: '.education-grid',
        start: 'top 70%'
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    });
  }
}