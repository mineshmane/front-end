import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email;
  public password;
  constructor(private http: HttpService,private router:Router) { }

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


    }, err => {
      console.log(" err", err);

    })
  }

}
