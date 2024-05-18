import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  username: string | undefined;
  constructor(private authService: AuthLibService) {
    console.log('dashboard', authService.userName);
    if(this.authService.userName=='No User') this.logout()
    this.username = this.authService.userName;
  }
  logout() {
    this.authService.navigate('login');
  }
}
