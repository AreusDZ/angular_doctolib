import { Component, OnInit } from '@angular/core';
import { PraticienService } from './../service/Praticien.service';
import { Praticien } from './../model/Praticien.model';

@Component({
  selector: 'app-praticiens',
  templateUrl: './praticiens.component.html',
  styleUrls: ['./praticiens.component.css']
})
export class PraticiensComponent implements OnInit {
  allPraticiens:Praticien[];
  praticien:Praticien;

  constructor(
      private praticienService:PraticienService
    ) { }

  ngOnInit(): void {
    this.praticienService.getAllPraticiens().subscribe((response) => {
      this.allPraticiens = response;
      console.log(this.allPraticiens);
    }, (error) => {
      console.log(error);
    })
  }

}
