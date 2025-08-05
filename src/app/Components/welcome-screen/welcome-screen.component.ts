import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
  animations: [
    trigger('slideAway', [
      transition(':leave', [
        animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class WelcomeScreenComponent implements OnInit {
  isVisible = true;

  ngOnInit() {
    const welcomeShown = localStorage.getItem('welcomeShown');
    
    if (!welcomeShown) {
      this.isVisible = true;
      localStorage.setItem('welcomeShown', 'true');
      
      setTimeout(() => {
        this.isVisible = false;
      }, 3000);
    } else {
      this.isVisible = false;
    }
  }

  closeWelcome() {
    this.isVisible = false;
  }
}