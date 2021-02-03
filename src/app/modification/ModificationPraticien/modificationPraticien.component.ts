import { Component, OnInit } from '@angular/core';
import { PraticienService } from './../../service/Praticien.service';
import { NgForm } from '@angular/forms';
import { Praticien } from 'src/app/model/Praticien.model';
@Component({
  selector: 'app-modification-praticien',
  templateUrl: './modificationPraticien.component.html',
  styleUrls: ['./modificationPraticien.component.css']
})
export class ModificationPraticienComponent implements OnInit {

id = 2;  // id en dur, il faudra récupérer celui du praticien connecté
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

  onSubmit(form: NgForm) {
    const email = form.value['Email'];
    const nom = form.value['Nom'];
    const specialite = form.value['Specialite'];
    const password = form.value['Password'];

    this.praticienService.PutPraticien(this.id,email,nom,specialite,password);
 }
 // ici j'appelle la fonction de modification du praticienService, pour effectuer la modif
}
