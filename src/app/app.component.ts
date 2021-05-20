import { Component, OnDestroy ,Inject, OnInit} from '@angular/core';
import IdleTimer from './idealtimer';
import { Router} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy,OnInit {
  title = 'Online Pay center';
  timer: any;
  constructor(private route:Router,private snackBar: MatSnackBar,
    @Inject(DOCUMENT) private _document: Document
    ){

  }

  ngOnInit() {
    // this.timer = new IdleTimer({
    //   timeout: 30, //expired after 30 sec 
    //   onTimeout: () => {
    //     this.title = "Session expired please login first";
    //     this.snackBar.open(this.title, '', {
    //       duration: 2000,
    //    });
    //     localStorage.clear();
    //     this.route.navigateByUrl('login')
    //     this.ngOnInit();
       
    //   }
    // });
  }
  ngOnDestroy() {
    console.log(" on distroy called ");
    
    this.timer.clear();
  }
}
