import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router} from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email;
  public password;
  constructor(private http: HttpService,private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submit() {
    let req = {
      email: this.email,
      password: this.password
    }
    console.log(" login calling ", req);

    this.http.Post('login', req).subscribe((res:any) => {
      console.log(res.data);
      localStorage.setItem('usertoken',res.data.token)
      this.router.navigateByUrl('pay')
      this.snackBar.open('login succesfull', '', {
        duration: 2000,
     });


    }, err => {
      console.log(" err", err);

    })
  }

}
