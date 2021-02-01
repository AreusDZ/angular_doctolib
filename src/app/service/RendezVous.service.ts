import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RendezVous } from "../model/RendezVous.model"

@Injectable({
  providedIn : 'root'
})
export class RendezVousService {

  constructor(private http:HttpClient) {}

  getAllRdvs() {
    let listeRdv = this.http.get<RendezVous[]>("http://localhost:8000/rdvs", {
      observe : 'body',
    })
    return listeRdv;
  }

  getRdv(id) {
    let rdvFound = this.http.get<RendezVous>("http://localhost:8000/rendezVous/" + id, {
      observe : 'body',
    })
    return rdvFound;
  }

  getRdvByIdPatient(id) {
    let rdvFound = this.http.get<RendezVous>("http://localhost:8000/rendezVous/patient" + id, {
      observe : 'body',
    })
    return rdvFound;
  }

  getRdvByIdPraticien(id) {
    let rdvFound = this.http.get<RendezVous>("http://localhost:8000/rendezVous/praticien" + id, {
      observe : 'body',
    })
    return rdvFound;
  }

  DelRdv(id) {
    this.http.delete<RendezVous>("http://localhost:8000/rendezVous/" + id, {
      observe : 'body',
    }).subscribe((response) => {
      console.log('Succesfully delete. ' + response);
    }, (error) => {
      console.log(error);
    })
  }

  AddRdv(dateRdv:string, adresse:string, patient:number, praticien:number) {
    this.http.post<RendezVous[]>("http://localhost:8000/rendezVouss", {
      dateRdv  : dateRdv,
      adresse  : adresse,
      patient  : patient,
      praticien: praticien,
    }, {
      observe  : 'response',
    }).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
  }
}
