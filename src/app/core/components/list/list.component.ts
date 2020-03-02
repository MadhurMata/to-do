import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  @Input() list:any = {};

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
    console.log(this.list)
  }

}
