import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {
type = JSON.parse(localStorage.getItem('type'));
  constructor() { }

  ngOnInit(): void {
   console.log(this.type);
  }

}
