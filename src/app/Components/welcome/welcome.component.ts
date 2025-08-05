import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  show = true;

  ngOnInit() {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      this.show = false;
    } else {
      localStorage.setItem('hasVisited', 'true');
      setTimeout(() => {
        this.show = false;
      }, 3000); // 3 seconds
    }
  }
}
