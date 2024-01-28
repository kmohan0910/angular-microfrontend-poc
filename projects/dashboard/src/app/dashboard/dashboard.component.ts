import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private authService : AuthLibService){
    console.log("dashboard", authService.userName)
  }
  login(){
    this.authService.navigate('login')
  }
}
