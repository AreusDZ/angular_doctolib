import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InscriptionPatientComponent } from './inscription-patient/inscription-patient.component';
import { InscriptionPraticienComponent } from './inscription-praticien/inscription-praticien.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ResultPraticienComponent } from './result-praticien/result-praticien.component';
import { PriseRDVComponent } from './prise-rdv/prise-rdv.component';
import { ListeRDVComponent } from './liste-rdv/liste-rdv.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PraticiensComponent } from './praticiens/praticiens.component';
import { HttpClientModule } from '@angular/common/http';
import { PraticienComponent } from './praticien/praticien.component';

const appRoutes: Routes = [
  {path:'' , component: SearchBarComponent},
  {path:'connexion' , component: ConnexionComponent},
  {path:'inscriptionPatient' , component: InscriptionPatientComponent},
  {path:'inscriptionPraticien' , component: InscriptionPraticienComponent},
  {path:'inscriptionPatient' , component: InscriptionPatientComponent},
  {path:'listeRendezVous' , component: ListeRDVComponent},
  {path:'priseRendezVous' , component: PriseRDVComponent},
  {path:'resultSearchPraticien' , component: ResultPraticienComponent},
  {path:'lesPraticiens' , component: PraticiensComponent},
  {path:'detailPraticien' , component: PraticienComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InscriptionPatientComponent,
    InscriptionPraticienComponent,
    ConnexionComponent,
    ResultPraticienComponent,
    PriseRDVComponent,
    ListeRDVComponent,
    SearchBarComponent,
    PraticiensComponent,
    PraticienComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
