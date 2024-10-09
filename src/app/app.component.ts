import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,  // Ensure the component is standalone
  imports: [CommonModule],  // Import CommonModule for ngClass
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: string = 'home';  // Default view
  sidebarOpen: boolean = false;

  setView(view: string) {
    this.view = view;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
