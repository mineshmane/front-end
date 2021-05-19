import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private htppService: HttpService, private snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  verify() {

    let token = this.route.snapshot.params.token;
    console.log(token);

    this.htppService.Post('verify/' + token, {}).subscribe(res => {
      console.log(res);
      this.snackBar.open('Your account is created successfully', '', {
        duration: 3000,
      });
      this.router.navigateByUrl('login')


    }, err => {
      console.log(err);
      this.snackBar.open('token is  expired please SignUp again', '', {
        duration: 3000,
      });

    })
  }
}
