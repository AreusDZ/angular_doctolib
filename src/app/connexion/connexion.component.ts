import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(
    private router:Router,
    private appService:AppService,
    private SpinnerService:NgxSpinnerService) {}

  ngOnInit(): void {
    if (localStorage.length != 0) {
      this.router.navigate(['/']);
    }
  }

  onSubmit(form:NgForm) {
    this.SpinnerService.show();

    const email    = form.value['Email'];
    const password = form.value['Password'];

    this.appService.login(email, password).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      //! SET ALERT DANGER
    });
  }
}
