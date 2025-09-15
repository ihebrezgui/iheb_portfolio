import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 stats = [
  { value: 10, label: 'Projects Completed in Academics' },
  { value: 5, label: 'AI Projects Built' },
  { value: 2, label: 'Internships Completed' },
  { value: 1, label: 'Year Left to Graduate' }
];
  techIcons = [
  { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/iheb-rezgui-8721b8217/' },
  { icon: 'fab fa-github', url: 'https://github.com/ihebrezgui' }
];


  
  maxStat = Math.max(...this.stats.map(stat => stat.value));

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    
    // Image animation
    gsap.from('.profile-image', {
      scrollTrigger: {
        trigger: '.dark-about',
        start: 'top 70%'
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    });

    // Tech icons animation
    gsap.from('.tech-icon', {
      scrollTrigger: {
        trigger: '.tech-icons',
        start: 'top 80%'
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // Text content animation
    gsap.from('.about-text > *', {
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 70%'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });
  }
}