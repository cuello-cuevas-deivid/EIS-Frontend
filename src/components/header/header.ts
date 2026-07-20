import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenu = false;

  toggleMenu(): void {
    this.isMenu = !this.isMenu;
  }

}
