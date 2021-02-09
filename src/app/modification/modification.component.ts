import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  type = JSON.parse(localStorage.getItem('type'));
  constructor() { }

  ngOnInit(): void {
  }

}
