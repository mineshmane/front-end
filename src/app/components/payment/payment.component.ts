import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpService } from '../../services/http.service'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public Amount;
  public amount = 0;
  constructor(private http: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
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

}
