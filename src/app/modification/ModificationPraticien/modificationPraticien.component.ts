import { Component, OnInit } from '@angular/core';
import { PraticienService } from './../../service/Praticien.service';
import { NgForm } from '@angular/forms';
import { Praticien } from 'src/app/model/Praticien.model';
@Component({
  selector: 'app-modification-praticien',
  templateUrl: './modificationPraticien.component.html',
  styleUrls: ['./modificationPraticien.component.css']
})
export class ModificationComponent implements OnInit {

id = 1;  // id en dur, il faudra récupérer celui du praticien connecté
praticien :Praticien;

  constructor(private praticienService:PraticienService) { }

  ngOnInit(): void {
  }

  getPraticien(id){
    this.praticienService.getPraticien(id).subscribe((response) => {
      this.praticien = response;
      console.log(this.praticien);
    },(error) => {
      console.log(error);
    })
  }
  onSubmit(form: NgForm) {
    const email = form.value['Email'];
    const nom = form.value['Nom'];
    const specialite = form.value['Specialite'];
    const password = form.value['Password'];

    this.praticienService.PutPraticien(null,email,nom,specialite,password);
 }
}
