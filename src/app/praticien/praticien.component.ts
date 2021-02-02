import { Component, OnInit,Input } from '@angular/core';
import { Praticien } from './../model/Praticien.model';
@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.css']
})
export class PraticienComponent implements OnInit {

 //* Get praticien detail
 @Input() Praticien:Praticien;
  constructor() { }

  ngOnInit(): void {
  }

}
