import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isMenuOpen = false;
  logoPath = 'assets/logos/IMG_1139.PNG';
  projectName = 'notGrandmas';

  constructor(private router: Router) {
    // Listen for navigation end events and scroll to fragment
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const urlTree = this.router.parseUrl(event.url);
        if (urlTree.fragment) {
          setTimeout(() => this.scrollToFragment(urlTree.fragment!), 100);
        }
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToFragment(fragment: string) {
    if (fragment === 'home') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(fragment);
    if (element) {
      // Add offset for fixed navbar if needed
      const offset = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  onNavClick(fragment: string | null) {
    this.closeMenu();
    
    if (fragment) {
      // Check if we're already on the home page
      const currentUrl = this.router.url.split('#')[0];
      if (currentUrl === '/') {
        // Already on home page, scroll immediately
        setTimeout(() => this.scrollToFragment(fragment), 50);
      }
      // If not on home page, router will navigate and the NavigationEnd event will handle scrolling
    }
  }
}

