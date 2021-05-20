import { HttpService } from '../../services/http.service'
import IdleTimer from '../../idealtimer';
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { BnNgIdleService } from 'bn-ng-idle';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public Amount;
  public amount = 0;
  timer: any;
  title;
  constructor(private http: HttpService, private bnIdle: BnNgIdleService,

    private route: Router, private snackBar: MatSnackBar,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit() {

    this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        this.title = "Session expired please login first";
        this.snackBar.open(this.title, '', {
          duration: 2000,
        });
        localStorage.clear();

        this.route.navigateByUrl('/login')

      }
    });

    this.getAmount();
  }

  getAmount() {
    this.http.Get('getamount/' + localStorage.getItem('usertoken')).subscribe((res) => {
      console.log(res[0].TotalAmount);
      this.Amount = res[0].TotalAmount

    }, err => {
      console.log(err);

    })
  }
  deposite() {
    let req = {
      amount: this.amount
    }
    this.http.Put('deposite/' + localStorage.getItem('usertoken'), req).subscribe((result) => {
      console.log(result);
      this.getAmount()
      this.snackBar.open("Rs." + this.amount + 'Cr deposited in your account succesfull', '', {
        duration: 2000,

      });
      this.amount = 0


    })
  }
  Withdrwa() {
    let req = {
      amount: this.amount
    }
    this.http.Put('withdraw/' + localStorage.getItem('usertoken'), req).subscribe((result) => {
      console.log(result);

      this.getAmount()
      this.snackBar.open("Rs." + this.amount + 'Cr debited from your account succesfull', '', {
        duration: 2000,
      });
      this.amount = 0

    })
  }

  // ngOnDestroy() {
  //   console.log(" on distroy called ");

  //   this.timer.cleanUp();
  // }

}
