import { Component, OnInit } from '@angular/core';
import { PraticienService } from './../../service/Praticien.service';
import { Praticien } from 'src/app/model/Praticien.model';
@Component({
  selector: 'app-monComptePraticien',
  templateUrl: './monComptePraticien.component.html',
  styleUrls: ['./monComptePraticien.component.css']
})
export class MonComptePraticienComponent implements OnInit {

userInfo = JSON.parse(localStorage.getItem('userInfo'));
id = this.userInfo.id;  // id de la personne connecté
praticien :Praticien;


  constructor(private praticienService:PraticienService) { }

  ngOnInit(): void {
    this.praticienService.getPraticien(this.id).subscribe((response) => {
    this.praticien = response;
    console.log(this.praticien);
    },(error) => {
      console.log(error);
    })
  }
 // ici je récupère les informations du praticien connecté dès le lancement de la page car c'est dans le onInit

  onSubmit(id){
    this.praticienService.DelPraticien(id)
  }

}
