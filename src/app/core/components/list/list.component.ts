import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks = [{
    id: 1,
    status: "green",
    title: "Loving Esmee"
  },{
    id: 2,
    status: "orange",
    title: "Sleep"
  }
]

  constructor() { }

  ngOnInit() {
  }

}
