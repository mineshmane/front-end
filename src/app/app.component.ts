import { Component } from '@angular/core';
import { from } from 'rxjs';
import IdleTimer from './idealtimer';
import { Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Payment';
  timer: any;
  constructor(private route:Router){

  }

  ngOnInit() {
    this.timer = new IdleTimer({
      timeout: 30, //expired after 50 sec 
      onTimeout: () => {
        this.title = "Timeout";
        localStorage.clear();
        this.route.navigateByUrl('login')
      }
    });
  }
  ngOnDestroy() {
    this.timer.clear();
  }
}
