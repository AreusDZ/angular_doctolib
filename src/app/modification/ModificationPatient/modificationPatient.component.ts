import { Component, OnInit } from '@angular/core';
import { PatientService } from './../../service/Patient.service';
import { NgForm } from '@angular/forms';
import { Patient } from 'src/app/model/Patient.model';
@Component({
  selector: 'app-modification-patient',
  templateUrl: './modificationPatient.component.html',
  styleUrls: ['./modificationPatient.component.css']
})
export class ModificationPatientComponent implements OnInit {

id = 5;  // id en dur, il faudra récupérer celui du praticien connecté
patient :Patient;


  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatient(this.id).subscribe((response) => {
    this.patient = response;
    console.log(this.patient);
    },(error) => {
      console.log(error);
    })
  }
  // ici je récupère les informations du praticien connecté dès le lancement de la page car c'est dans le onInit

  onSubmit(form: NgForm) {
    const email = form.value['Email'];
    const nom = form.value['Nom'];
    const prenom = form.value['Prenom'];
    const age = form.value['Age'];
    const password = form.value['Password'];

    this.patientService.PutPatient(this.id,email,nom,prenom,age,password);
 }
 // ici j'appelle la fonction de modification du praticienService, pour effectuer la modif
}
