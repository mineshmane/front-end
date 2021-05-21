import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpService } from '../../services/http.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public username;
  public email;
  public phone;
  public password;
  constructor(private htppService: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submit() {
    let req = {
      phone: this.phone,
      email: this.email,
      username: this.username,
      password:this.password
    }
    console.log(req);

    this.htppService.Post('register', req).subscribe((res) => {
      console.log(" res ", res);
      this.snackBar.open('please check your mail to create account ', '', {
        duration: 3000,
      });

    }, (error) => {
      console.log(error);
      this.snackBar.open(error, '', {
        duration: 3000,
      });

    })
  }

}
