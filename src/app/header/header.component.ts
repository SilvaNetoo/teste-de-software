import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sidebar: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    if (this.sidebar) {
      document.getElementById('mySidebar').style.display = 'none';
      this.sidebar = false;
    } else {
      document.getElementById('mySidebar').style.display = 'block';
      this.sidebar = true;
    }
  }

}
