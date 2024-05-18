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
const username =  document.getElementById('username')as HTMLInputElement

    this.AuthService.login(username.value || 'Mohan');
    this.AuthService.navigate('dashboard');
  }
}
