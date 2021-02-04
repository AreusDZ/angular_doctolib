import { Component, OnInit } from '@angular/core';
import { PatientService } from './../../service/Patient.service';
import { Patient } from 'src/app/model/Patient.model';
@Component({
  selector: 'app-monComptePatient',
  templateUrl: './monComptePatient.component.html',
  styleUrls: ['./monComptePatient.component.css']
})
export class MonComptePatientComponent implements OnInit {

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

  onSubmit(id){
    this.patientService.DelPatient(id)
  }
  // ici je récupère les informations du patient connecté dès le lancement de la page car c'est dans le onInit

}
