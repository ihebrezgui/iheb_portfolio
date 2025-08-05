import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isHovered = false;
  hoverDelay = 150; // milliseconds delay before expanding
  hoverTimeout: any;

 hideSidebar = false;
  private lastScrollTop = 0;
  private scrollTimeout: any;

  @HostListener('window:scroll', [])
onWindowScroll() {
  if (window.innerWidth <= 768) {
    // Hide the sidebar as long as the user is scrolling
    this.hideSidebar = true;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      // Show the sidebar again after user stops scrolling
      this.hideSidebar = false;
    }, 200);
  }
}


  @HostListener('mouseenter')
  onMouseEnter() {
    this.hoverTimeout = setTimeout(() => {
      this.isHovered = true;
    }, this.hoverDelay);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    clearTimeout(this.hoverTimeout);
    this.isHovered = false;
  }
}