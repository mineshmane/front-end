import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerificationComponent } from './components/verification/verification.component';
import { PaymentComponent } from './components/payment/payment.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BnNgIdleService } from 'bn-ng-idle';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    VerificationComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,MatSnackBarModule,
    MatCardModule,
    BrowserAnimationsModule, MatFormFieldModule, FlexLayoutModule,MatButtonModule,FormsModule,
    MatInputModule,
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
