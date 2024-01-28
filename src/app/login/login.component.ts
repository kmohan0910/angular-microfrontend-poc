import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private AuthService : AuthLibService){
    console.log(AuthService.userName, "login")
  }
  navigate(){
    this.AuthService.navigate('dashboard')
  }
}
