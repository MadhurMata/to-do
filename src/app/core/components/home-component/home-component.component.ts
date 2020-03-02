import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {
  

  list = {
  type: 'standard',
  lists: [{
      name: 'To Do',
    },
    {
      name: 'Doing',
    },
    {
      name: 'Done',
    }]
}

  constructor() { }

  ngOnInit() {
  }

}

