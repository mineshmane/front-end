import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public username;
  public email;
  public phone
  constructor(private htppService: HttpService) { }

  ngOnInit() {
  }

  submit() {
    let req = {
      phone: this.phone,
      email: this.email,
      username: this.username
    }
    console.log(req);
    
    this.htppService.Post('register', req).subscribe((res) => {
      console.log(" res ", res);

    }, (error) => {
      console.log(error);

    })
  }

}
