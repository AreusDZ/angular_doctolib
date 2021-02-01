import { Component, OnInit } from '@angular/core';
import { Praticien } from './../model/Praticien.model';
import { PraticienService } from './../service/Praticien.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription-praticien',
  templateUrl: './inscription-praticien.component.html',
  styleUrls: ['./inscription-praticien.component.css']
})
export class InscriptionPraticienComponent implements OnInit {

  constructor(private praticienService:PraticienService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value['Email'];
    const nom = form.value['Nom'];
    const specialite = form.value['Specialite'];
    const password = form.value['Password'];

    this.praticienService.AddPraticien(email,nom,specialite,password);
 }
}
