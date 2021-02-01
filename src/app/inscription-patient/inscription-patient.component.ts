import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from './../model/Patient.model';
import { PatientService } from './../service/Patient.service';


@Component({
  selector: 'app-inscription-patient',
  templateUrl: './inscription-patient.component.html',
  styleUrls: ['./inscription-patient.component.css']
})
export class InscriptionPatientComponent implements OnInit {

  allPatients:Patient[];
  patient:Patient;


  constructor(
    private patientService:PatientService) { }

  ngOnInit(): void {

  }

    onSubmit(form: NgForm) {
     const email = form.value['Email'];
     const nom = form.value['Nom'];
     const prenom = form.value['Prenom'];
     const age = form.value['Age'];
     const password = form.value['Password'];

     this.patientService.AddPatient(email,nom,prenom,age,password);
  }
}
