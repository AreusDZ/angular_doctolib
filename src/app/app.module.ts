import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InscriptionPatientComponent } from './inscription-patient/inscription-patient.component';
import { InscriptionPraticienComponent } from './inscription-praticien/inscription-praticien.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PriseRDVComponent } from './prise-rdv/prise-rdv.component';
import { ListeRDVComponent } from './liste-rdv/liste-rdv.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './index/searchBar/searchbar.component';
import { PraticiensComponent } from './praticiens/praticiens.component';
import { HttpClientModule } from '@angular/common/http';
import { PraticienComponent } from './praticien/praticien.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { searchResultComponent } from './searchResult/searchResult.component';
import { ModificationComponent } from './modification/modification.component';
import { ModificationPraticienComponent } from './modification/ModificationPraticien/modificationPraticien.component';
import { ModificationPatientComponent } from './modification/ModificationPatient/modificationPatient.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { MonComptePatientComponent } from './mon-compte/monComptePatient/monComptePatient.component';
import { MonComptePraticienComponent } from './mon-compte/monComptePraticien/monComptePraticien.component';


const appRoutes: Routes = [
  {path:'' , component: IndexComponent},
  {path:'connexion' , component: ConnexionComponent},
  {path:'search' , component: searchResultComponent},
  {path:'inscriptionPatient' , component: InscriptionPatientComponent},
  {path:'inscriptionPraticien' , component: InscriptionPraticienComponent},
  {path:'inscriptionPatient' , component: InscriptionPatientComponent},
  {path:'listeRendezVous' , component: ListeRDVComponent},
  {path:'priseRendezVous' , component: PriseRDVComponent},
  {path:'lesPraticiens' , component: PraticiensComponent},
  {path:'modificationPraticien' , component: ModificationComponent},
  {path:'modificationPatient' , component: ModificationComponent},
  {path:'monComptePatient' , component: MonCompteComponent},
  {path:'monComptePraticien' , component: MonCompteComponent},
  {path:'detailPraticien' , component: PraticienComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InscriptionPatientComponent,
    InscriptionPraticienComponent,
    ConnexionComponent,
    PriseRDVComponent,
    ListeRDVComponent,
    SearchBarComponent,
    PraticiensComponent,
    PraticienComponent,
    IndexComponent,
    searchResultComponent,
    ModificationComponent,
    ModificationPraticienComponent,
    ModificationPatientComponent,
    MonCompteComponent,
    MonComptePatientComponent,
    MonComptePraticienComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
