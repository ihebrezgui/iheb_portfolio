import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyber-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  ngOnInit() {
    this.createBinaryGrid();
    this.createParticles();
  }

  createBinaryGrid() {
    const grid = document.querySelector('.binary-grid');
    if (grid) {
      for (let i = 0; i < 200; i++) {
        const bit = document.createElement('div');
        bit.className = 'binary-bit';
        bit.textContent = Math.random() > 0.5 ? '1' : '0';
        bit.style.left = `${Math.random() * 100}%`;
        bit.style.top = `${Math.random() * 100}%`;
        bit.style.animationDelay = `${Math.random() * 5}s`;
        grid.appendChild(bit);
      }
    }
  }

  createParticles() {
    const container = document.querySelector('.data-particles');
    if (container) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 10 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(particle);
      }
    }
  }
}