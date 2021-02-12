import { Component, OnInit } from '@angular/core';
import { RendezVous } from '../model/RendezVous.model';
import { RendezVousService } from './../service/RendezVous.service';


@Component({
  selector: 'app-liste-rdv',
  templateUrl: './liste-rdv.component.html',
  styleUrls: ['./liste-rdv.component.css']
})
export class ListeRDVComponent implements OnInit {
  userInfo = JSON.parse(localStorage.getItem('userInfo'));
  id = this.userInfo.id;  // id en dur, il faudra récupérer celui du patient connecté
  rendezVous:RendezVous;
  constructor(private rendezVousService:RendezVousService) { }

  ngOnInit(): void {
    this.rendezVousService.getRdvByIdPatient(this.id).subscribe((response) => {
      this.rendezVous = response;
      console.log(this.rendezVous);
      },(error) => {
        console.log(error);
      })
  }

}
