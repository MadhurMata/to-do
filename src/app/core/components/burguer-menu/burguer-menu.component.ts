import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burguer-menu',
  templateUrl: './burguer-menu.component.html',
  styleUrls: ['./burguer-menu.component.css']
})
export class BurguerMenuComponent implements OnInit {

  isMenuShown = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.isMenuShown = !this.isMenuShown
  }

}
